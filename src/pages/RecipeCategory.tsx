import React from 'react';
import { Layout } from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { recipieCategories } from '../data/recipie';

export const RecipeCategory = () => {
  const { id } = useParams();
  console.log(id);
  const category = recipieCategories.find(cat => cat.id === id);

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">Category Not Found</h1>
            <Link
              to="/inspiration"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Inspiration
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${category.title} - CyberChef Recipes`}
      description={category.description}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link
            to="/inspiration"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Inspiration
          </Link>
          
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img
              src={category.image}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="text-4xl font-bold mb-2 text-cyan-400 cyber-glow">{category.title}</h1>
              <p className="text-lg text-cyan-300">{category.description}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {category.recipes.map((recipe, index) => (
            <Link
              key={index}
              to={`/inspiration/${id}/${recipe.slug}`}
              className="bg-gray-900/90 rounded-lg overflow-hidden border border-cyan-500 shadow-lg shadow-cyan-500/20 cyber-border hover:scale-105 transition-transform"
            >
              <div className="aspect-video relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{recipe.title}</h3>
                <div className="flex items-center justify-between text-cyan-300">
                  <span>⏱ {recipe.totalTime}</span>
                  <span>📊 {recipe.difficulty}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[300px] flex items-center justify-center text-cyan-300">
          Ad Space
        </div>
      </div>
    </Layout>
  );
};