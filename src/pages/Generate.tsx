import React from 'react';
import { Layout } from '../components/Layout';
import { ImageUploadForm } from '../components/ImageUploadForm';
import { RecipeCard } from '../components/RecipeCard';
import { Toaster } from 'react-hot-toast';
import { useRecipeGenerator } from '../hooks/useRecipeGenerator';
import { Helmet } from 'react-helmet-async';
import logoAi from '../constants/images/logo-ai.png';

export const Generate = () => {
  const {
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
  } = useRecipeGenerator();
  const SITE_URL = import.meta.env.VITE_FRONT_URL

  return (
    <>
      <Helmet>
            <title>Custom Recipe Creator</title>
            <meta name="description" content="Dietary-Specific Meal Solutions" />
            <meta property="og:title" content="Custom Recipe Creator" />
            <meta property="og:description" content="Dietary-Specific Meal Solutions" />
            <meta property="og:image" content={logoAi} />
            <meta property="og:url" content={SITE_URL} />
            <meta name="robots" content="index, follow" />
      </Helmet>
      <Layout
        title="Generate Recipe - AI Creative"
        description="Upload a photo of your ingredients and get an AI-generated recipe instantly."
      >
        <div className="container mx-auto px-4 py-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-center text-cyan-400 cyber-glow">
              Generate Your Recipe
            </h1>
            <p className="text-center text-cyan-300 max-w-2xl mx-auto">
              Upload a photo of your ingredients, set your preferences, and let our AI create a personalized recipe for you.
            <br></br> AI-generated content may contain errors, please verify measurements, cooking times, and substitutions with trusted sources before you cook.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <ImageUploadForm
                loading={loading}
                imageUrl={imageUrl}
                dietary={dietary}
                onDietaryChange={setDietary}
                meal_type={mealType}
                onMealChange={setMealType}
                allergens={allergens}
                onAllergensChange={setAllergens}
                cuisine_type={cuisineType}
                onCuisineChange={setCuisineType}
                onFileChange={handleFileChange}
                onSubmit={handleSubmit}
              />

              <div className="space-y-6">
                {images.map((image) => (
                  <RecipeCard
                    key={image.id}
                    image={image}
                    onRemove={handleRemoveImage}
                    onRetry={handleRetryAnalysis}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              {/* Google AdSense Placeholder 1 */}
              <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[300px] flex items-center justify-center text-cyan-300">
                Ad Space 1
              </div>

              {/* Google AdSense Placeholder 2 */}
              <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[600px] flex items-center justify-center text-cyan-300">
                Ad Space 2
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </Layout>
    </>
  );
};