import React from 'react';
import { Layout } from '../components/Layout';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Clock, Users, ChefHat } from 'lucide-react';
import { recipieCategories } from '../data/recipie';

export const RecipeDetail = () => {
  const { category: categoryId, slug } = useParams();

  const category = recipieCategories.find(cat => cat.id === categoryId);
  const recipe = category?.recipes.find(recipe => recipe.slug === slug);

  if (!category || !recipe) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">Recipe Not Found</h1>
            <Link
              to="/inspiration"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5 mr-2" />
              Back to Inspiration
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedRecipes = category.recipes
    .filter(r => r.slug !== recipe.slug)
    .slice(0, 3);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li>
              <Link to="/inspiration" className="text-cyan-400 hover:text-cyan-300">Inspiration</Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li>
              <Link to={`/category/${categoryId}`} className="text-cyan-400 hover:text-cyan-300">{category.title}</Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li>
              <span className="text-cyan-300" aria-current="page">{recipe.title}</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <h1 className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">{recipe.title}</h1>
            
            <p className="text-cyan-300 text-lg mb-8">{recipe.description}</p>

            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                <p className="text-cyan-300">Total Time</p>
                <p className="text-lg font-bold text-cyan-400">{recipe.totalTime}</p>
              </div>
              <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                <p className="text-cyan-300">Servings</p>
                <p className="text-lg font-bold text-cyan-400">{recipe.servings}</p>
              </div>
              <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 text-center">
                <ChefHat className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                <p className="text-cyan-300">Difficulty</p>
                <p className="text-lg font-bold text-cyan-400">{recipe.difficulty}</p>
              </div>
            </div>

            <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[250px] flex items-center justify-center text-cyan-300 mb-8">
              Ad Space
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900/90 p-6 rounded-lg border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-cyan-300 flex items-center">
                      <span className="mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900/90 p-6 rounded-lg border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Nutrition</h2>
                <dl className="space-y-2">
                  {Object.entries(recipe.nutrition).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-cyan-300">
                      <dt className="capitalize">{key}</dt>
                      <dd className="font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="bg-gray-900/90 p-6 rounded-lg border border-cyan-500/20 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="text-cyan-300">
                    <span className="font-bold text-cyan-400 mr-2">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-gray-900/90 p-6 rounded-lg border border-cyan-500/20 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Tips & Variations</h2>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="text-cyan-300 flex items-center">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-900/90 p-6 rounded-lg border border-cyan-500/20">
              <h2 className="text-xl font-bold mb-4 text-cyan-400">Related Recipes</h2>
              <div className="space-y-4">
                {relatedRecipes.map((related, index) => (
                  <Link
                    key={index}
                    to={`/inspiration/${categoryId}/${related.slug}`}
                    className="block group"
                  >
                    <div className="aspect-video rounded-lg overflow-hidden mb-2">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[600px] flex items-center justify-center text-cyan-300">
              Ad Space
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};