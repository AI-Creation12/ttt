import { useState, useEffect } from 'react';
import { Image, RecipeResponse } from '../types';
import toast from 'react-hot-toast';
import { CUISINE_TYPES, MEAL_TYPE, ALLERGENS, DIETARY_PREFENCES, ALLOWED_FILE_TYPES } from '../constants';

export const useRecipeGenerator = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [dietary, setDietary] = useState(DIETARY_PREFENCES[0]);
  const [mealType, setMealType] = useState(MEAL_TYPE[0]);
  const [allergens, setAllergens] = useState<string[]>([]);
  const [cuisineType, setCuisineType] = useState(CUISINE_TYPES[0]);
  const [loading, setLoading] = useState(false);
  const API_URL_UPLOAD = import.meta.env.VITE_API_URL_IMAGES

  useEffect(() => {
    return () => {
      images.forEach(image => {
        if (image.objectUrl) {
          URL.revokeObjectURL(image.objectUrl);
        }
      });
    };
  }, []);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      toast.error('Only PNG, JPG, and WEBP files are allowed');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImageUrl(reader.result);
        setImageBase64(reader.result.split(',')[1]);
      }
    };
    reader.onerror = () => {
      toast.error('Failed to load image');
    };
  };

  const handleRemoveImage = (imageId: string) => {
    setImages(prev => {
      const imageToRemove = prev.find(img => img.id === imageId);
      if (imageToRemove?.objectUrl) {
        URL.revokeObjectURL(imageToRemove.objectUrl);
      }
      return prev.filter(img => img.id !== imageId);
    });
  };

  const handleRetryAnalysis = async (imageId: string) => {
    const image = images.find(img => img.id === imageId);
    if (!image) return;

    setImages(prev => prev.map(img =>
      img.id === imageId
        ? { ...img, status: 'loading', errorType: undefined, errorDetails: undefined }
        : img
    ));

    try {
      const response = await fetch(API_URL_UPLOAD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: image.imageBase64,
          dietary: image.dietary,
          mealType: image.meal_type,
          allergens: image.allergens,
          cuisineType: image.cuisine_type
        })
      });

      if (response.status === 422) {
        setImages(prev => prev.map(img =>
          img.id === imageId
            ? { ...img, status: 'error', errorType: 'invalid_image' }
            : img
        ));
        return;
      }

      if (response.status === 429) {
        const data = await response.json();
        setImages(prev => prev.map(img =>
          img.id === imageId
            ? {
              ...img,
              status: 'error',
              errorType: 'rate_limit',
              errorDetails: {
                countdown: data.countdown
              }
            }
            : img
        ));
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to analyze recipe');
      }

      const recipeData: RecipeResponse = await response.json();

      setImages(prev => prev.map(img =>
        img.id === imageId
          ? {
            ...img,
            recipe: recipeData,
            status: 'success',
            image_url: `data:image/png;base64,${recipeData.image_64encode}`,
            errorType: undefined,
            errorDetails: undefined
          }
          : img
      ));

      toast.success('Recipe analysis completed!');
    } catch (error: any) {
      setImages(prev => prev.map(img =>
        img.id === imageId
          ? { ...img, status: 'error', errorType: 'server_unavailable' }
          : img
      ));
      toast.error('Failed to analyze recipe');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const allergensToSend = allergens.length === 0 ? "None" : allergens;

    const newImage: Image = {
      id: crypto.randomUUID(),
      image_url: imageUrl,
      imageBase64: imageBase64,
      objectUrl: imageUrl,
      dietary: dietary,
      meal_type: mealType,
      allergens: allergensToSend,
      cuisine_type: cuisineType,
      created_at: new Date().toISOString(),
      status: 'loading'
    };

    setImages((prev) => [newImage, ...prev]);

    try {
      const response = await fetch(API_URL_UPLOAD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imageBase64,
          dietary: dietary,
          meal_type: mealType,
          allergens: allergensToSend,
          cuisine_type: cuisineType
        })
      });

      if (response.status === 422) {
        setImages(prev => prev.map(img =>
          img.id === newImage.id
            ? { ...img, status: 'error', errorType: 'invalid_image' }
            : img
        ));
        return;
      }

      if (response.status === 429) {
        const data = await response.json();
        setImages(prev => prev.map(img =>
          img.id === newImage.id
            ? {
              ...img,
              status: 'error',
              errorType: 'rate_limit',
              errorDetails: {
                countdown: data.countdown
              }
            }
            : img
        ));
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to analyze recipe');
      }

      const recipeData: RecipeResponse = await response.json();

      setImages((prev) => prev.map(img =>
        img.id === newImage.id
          ? {
            ...img,
            recipe: recipeData,
            status: 'success',
            image_url: `data:image/png;base64,${recipeData.image_64encode}`
          }
          : img
      ));

      toast.success('Recipe analysis completed!');
      setImageUrl('');
      setDietary(DIETARY_PREFENCES[0]);
      setMealType(MEAL_TYPE[0]);
      setAllergens([]);
      setCuisineType(CUISINE_TYPES[0]);
    } catch (error: any) {
      setImages(prev => prev.map(img =>
        img.id === newImage.id
          ? { ...img, status: 'error', errorType: 'server_unavailable' }
          : img
      ));
      toast.error('Failed to analyze recipe');
    } finally {
      setLoading(false);
    }
  };

  return {
    images,
    imageUrl,
    dietary,
    mealType,
    allergens,
    cuisineType,
    loading,
    handleFileChange,
    handleRemoveImage,
    handleRetryAnalysis,
    handleSubmit,
    setDietary,
    setMealType,
    setAllergens,
    setCuisineType,
  };
};