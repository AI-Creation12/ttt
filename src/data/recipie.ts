import AirFryerChickenBreasts from '../constants/images/AirFryerChickenBreasts.webp';
import CrispyFrenchFries from '../constants/images/CrispyFrenchFries.webp';
import SalmonWithMustardGlaze from '../constants/images/SalmonWithMustardGlaze.webp';

import PenneAllaVodka from '../constants/images/PenneAllaVodka.webp';
import ChickenPotPie from '../constants/images/ChickenPotPie.webp';
import BeefStroganoff from '../constants/images/BeefStroganoff.webp';

import NextLevelKeyLimePie from '../constants/images/NextLevelKeyLimePie.webp';
import CinnamonRollFocaccia from '../constants/images/CinnamonRollFocaccia.webp';
import TahiniMississippiMudPieWithSesameBrittleGarnish from '../constants/images/TahiniMississippiMudPieWithSesameBrittleGarnish.webp';

import KimchiQuesadillas from '../constants/images/KimchiQuesadillas.webp';
import ThaiCurryRisotto from '../constants/images/ThaiCurryRisotto.webp';
import KoreanBBQTacos from '../constants/images/KoreanBBQTacos.webp';

import TurmericBuddhaBowl from '../constants/images/TurmericBuddhaBowl.webp';
import MediterraneanQuinoaBowl from '../constants/images/MediterraneanQuinoaBowl.webp';
import BangBangSalmonBowl from '../constants/images/BangBangSalmonBowl.webp';

import CreamyCajunChickenPasta from '../constants/images/CreamyCajunChickenPasta.webp';
import BeefMushroomStroganoff from '../constants/images/BeefMushroomStroganoff.webp';
import ChickenChasseur from '../constants/images/ChickenChasseur.webp';

import GreenBeanPastaCashewPesto from '../constants/images/GreenBeanPastaCashewPesto.webp';
import SneakyChickpeaBurgers from '../constants/images/SneakyChickpeaBurgers.webp';
import CauliflowerTikkaMasala from '../constants/images/CauliflowerTikkaMasala.webp';

import PorkPeanutDragonNoodles from '../constants/images/PorkPeanutDragonNoodles.webp';
import CreamyTomatoSpinachPasta from '../constants/images/CreamyTomatoSpinachPasta.webp';
import HeartyDumplingSoup from '../constants/images/HeartyDumplingSoup.webp';

import ChilliCrabWithBaoBuns from '../constants/images/ChilliCrabWithBaoBuns.webp';
import KoreanFriedChickenBurgersWithKimchiSlaw from '../constants/images/KoreanFriedChickenBurgersWithKimchiSlaw.webp';
import SpicyLambKeemaPauWithFriedEgg from '../constants/images/SpicyLambKeemaPauWithFriedEgg.webp';

import airFryer from '../constants/images/air-fryer.webp';
import quickEasy from '../constants/images/quick-easy.webp';
import comfortFood from '../constants/images/comfort-food.webp';
import streetFoodInspired from '../constants/images/street-food-inspired.webp';
import healthyBowls from '../constants/images/healthy-bowls.webp';
import plantForward from '../constants/images/plant-forward.webp';
import onePotWonders from '../constants/images/one-pot-wonders.webp';
import globalFusion from '../constants/images/global-fusion.webp';
import dessertsBaking from '../constants/images/desserts-baking.webp';


export interface RealtedRecipe {
  title: string;
  image: string;
  slug: string;
}

export interface Recipe {
  title: string;
  slug: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  ingredients: string[]; // Adjust type if using objects instead of strings
  instructions: string[];
  nutrition: Record<string, string | number>; // Adjust if structure known
  tips: string[];
  relatedRecipes: RealtedRecipe[]; // or Recipe[] if using full objects
}

export interface RecipeCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  recipes: Recipe[];
}



export const recipieCategories: Record<string, RecipeCategory> = [
    {
      id: 'air-fryer',
      title: 'Air Fryer Recipes',
      description: 'Delicious recipes made in an air fryer',
      image: airFryer,
      recipes: [
        {
          title: 'Air Fryer Chicken Breasts',
          slug: 'air-fryer-chicken-breasts',
          time: '23 mins',
          difficulty: 'Easy',
          image: AirFryerChickenBreasts,
          description: 'Tender and juicy chicken breasts cooked in an air fryer with a crispy exterior.',
          prepTime: '23 mins',
          cookTime: '23 mins', 
          totalTime: '23 mins',
          servings: 2,
          ingredients: [
            '2 boneless, skinless chicken breasts',
            '1 tablespoon olive oil',
            '1 tablespoon Italian seasoning',
            '1 teaspoon garlic powder',
            '1/2 teaspoon paprika',
            'Salt and pepper to taste'
          ],
          instructions: [
            'Brush chicken breasts with olive oil.',
            'In a small bowl, combine Italian seasoning, garlic powder, paprika, salt, and pepper.',
            'Rub the seasoning onto both sides of the chicken breasts.',
            'Place the chicken in the air fryer basket.',
            'Cook at 360 degrees Fahrenheit for 9 minutes.',
            'Flip the chicken and cook for an additional 9 minutes or until the internal temperature is 165 degrees Fahrenheit.',
            'Allow the chicken to rest for 5 minutes before slicing and serving.'
          ],
          nutrition: {
            'Calories': '600',
            'Protein': '90 g',
            'Fat': '30 g',
            'Carbohydrates': '4 g',
            'Sodium': 'Varies depending on salt added'
          },
          tips: [
            'Marinades: Marinating the chicken before air frying significantly enhances flavor and keeps it moist.',
            'Different Seasonings: Experimenting with various spice blends allows for diverse flavor profiles to suit different tastes.',
            'Check for Doneness: Using a meat thermometer to ensure the internal temperature reaches 165°F (74°C) is crucial for food safety and prevents overcooking.'
          ],
          relatedRecipes: [
            {
          title: "Crispy French Fries",
          image: CrispyFrenchFries,
          slug: "crispy-french-fries"
            },
            {
          title: "Salmon with Mustard Glaze",
          image: SalmonWithMustardGlaze,
          slug: "salmon-mustard-glaze"
            },
          ]
        },
        {
          title: 'Crispy French Fries',
          slug: 'crispy-french-fries',
          time: '45 minutes',
          difficulty: 'Easy',
          image: CrispyFrenchFries, 
          description: 'Classic French fries, perfectly crispy on the outside and fluffy on the inside. A simple yet universally loved side dish.',
          prepTime: '45 minutes',
          cookTime: '45 minutes',
          totalTime: '45 minutes',
          servings: 2,
          ingredients: [
            'Potatoes (Russet or Yukon Gold) 2 large',
            'Vegetable oil (for frying) 3-4 cups',
            'Salt to taste'
          ],
          instructions: [
            'Wash and scrub the potatoes thoroughly. Cut them lengthwise into even-sized sticks, about 1/4 to 1/2 inch thick.',
            'Place the cut potatoes in a large bowl and cover them with cold water. Let them soak for at least 30 minutes (or up to a few hours) to remove excess starch. This helps in achieving crispier fries.',
            'Drain the potatoes well and pat them completely dry with paper towels. Thorough drying is crucial for crispiness.',
            'Heat the vegetable oil in a deep fryer or a heavy-bottomed pot to 300°F (150°C). Use a thermometer to ensure accurate temperature.',
            'Fry the potatoes in batches, being careful not to overcrowd the fryer. Fry for about 3-4 minutes until they are slightly softened and pale. Remove them with a slotted spoon and place them on a wire rack to drain.',
            'Increase the oil temperature to 375°F (190°C).',
            'Fry the partially cooked potatoes again in batches for another 2-3 minutes, or until they are golden brown and crispy. Remove them with a slotted spoon and place them back on the wire rack lined with paper towels.',
            'Season immediately with salt while they are still hot.',
            'Serve hot and enjoy!'
          ],
          nutrition: {
            'calories': '800',
            'fat': '50g',
            'carbohydrates': '100g',
            'protein': '15g'
          },
          tips: [
            'For extra crispy fries, after the initial soaking, you can toss the dried potato sticks with a tablespoon of cornstarch before the first fry.',
            'Experiment with different seasonings after frying, such as paprika, garlic powder, or cayenne pepper for a spicy kick.',
            'For a healthier option, consider baking the fries. Toss the potato sticks with a little oil and your choice of seasonings, then bake at 400°F (200°C) for 20-30 minutes, flipping halfway through, until golden and crispy.'
          ],
          relatedRecipes: [
            {
              title: "Air Fryer Chicken Breasts",
              image: AirFryerChickenBreasts,
              slug: "air-fryer-chicken-breasts"
            },
            {
              title: "Salmon with Mustard Glaze",
              image: SalmonWithMustardGlaze,
              slug: "salmon-mustard-glaze"
            },
          ]
        },
         {
          title: 'Salmon with Mustard Glaze',
          slug: 'salmon-mustard-glaze',
          time: '20 minutes',
          difficulty: 'Easy',
          image: SalmonWithMustardGlaze, // Added placeholder
          description: 'Flaky and tender baked salmon coated in a tangy and savory mustard glaze. A quick and elegant dish perfect for a weeknight meal or a special occasion.',
          prepTime: '20 minutes',
          cookTime: '20 minutes',
          totalTime: '20 minutes',
          servings: 2,
          ingredients: [
            'Salmon fillets (skin on or off): 2 (about 6 oz each)',
            'Dijon mustard: 2 tablespoons',
            'Whole grain mustard: 1 tablespoon',
            'Maple syrup or honey: 1 tablespoon',
            'Fresh lemon juice: 1 teaspoon',
            'Olive oil: 1 tablespoon',
            'Fresh dill or parsley (chopped): for garnish',
            'Salt: to taste',
            'Black pepper: to taste'
          ],
          instructions: [
            'Preheat your oven to 400°F (200°C). Line a baking sheet with parchment paper for easy cleanup.',
            'In a small bowl, whisk together the Dijon mustard, whole grain mustard, maple syrup (or honey), and lemon juice.',
            'Brush the salmon fillets with olive oil and season them with salt and pepper.',
            'Spread the mustard glaze evenly over the top of each salmon fillet.',
            'Place the glazed salmon fillets on the prepared baking sheet.',
            'Fry for 12–15 minutes, or until the salmon is cooked through and flakes easily with a fork. The internal temperature should reach 145°F (63°C).',
            'Garnish with fresh chopped dill or parsley before serving.',
          ],
          nutrition: {
            'Calories': '500',
            'Fat': '35g',
            'Protein': '45g',
            'Carbohydrates': '15g'
          },
          tips: [
            'For a richer glaze, whisk in a teaspoon of mayonnaise or softened butter.',
            'Add a pinch of garlic powder or onion powder to the glaze for extra flavor.',
            'Instead of baking, you can pan-sear the salmon. Cook skin-side down first until crispy, then flip and cook until done. Brush with the glaze during the last few minutes of cooking.'
          ],
          relatedRecipes: [
            {
              title: "Air Fryer Chicken Breasts",
              image: AirFryerChickenBreasts,
              slug: "air-fryer-chicken-breasts"
            },
            {
              title: "Crispy French Fries",
              image: CrispyFrenchFries,
              slug: "crispy-french-fries"
            },
          ]
        }
      ]
    },
    {
      id: 'comfort-food',
      title: 'Comfort Food',
      description: 'Hearty and satisfying dishes that evoke a sense of nostalgia or homeliness.',
      image: comfortFood, // Added placeholder
      recipes: [
        {
          title: 'Penne alla Vodka',
          slug: 'penne-alla-vodka',
          time: '30 minutes',
          difficulty: 'Easy',
          image: PenneAllaVodka, // Added
          description: 'A delicious Italian-American pasta dish with a creamy tomato sauce made with vodka, cream, and Parmesan cheese.',
          prepTime: '30 minutes',
          cookTime: '30 minutes',
          totalTime: '30 minutes',
          servings: 4,
          ingredients: [
            '320 g penne pasta',
            '2 tablespoons extra virgin olive oil',
            '2 cloves of garlic',
            '1.5 cups tomato puree (passata)',
            'Salt and pepper to taste',
            '1 teaspoon sweet paprika powder',
            '2 pinches of hot paprika',
            '150 ml heavy cream (30%)',
            '60 ml vodka',
            '4 tablespoons grated Parmesan cheese + extra for serving',
            'Fresh basil (or parsley)'
          ],
          instructions: [
            'Cook the penne pasta according to package directions.',
            'While the pasta is cooking, heat the olive oil in a large pan. Add the garlic and sauté gently.',
            'Add the tomato puree, salt, pepper, sweet paprika, and hot paprika. Cook for about 3-4 minutes.',
            'Add the heavy cream, reduce the heat, and cook for about 2-3 minutes.',
            'Add the vodka and mix.',
            'Drain the pasta and add it to the sauce. Mix and cook for about 1 minute over low heat, stirring occasionally.',
            'Add the Parmesan cheese and mix. Serve immediately, garnished with basil and extra Parmesan cheese.'
          ],
          nutrition: {
            'Calories': '555',
            'Fat': '24g',
            'Protein': '14g',
            'Carbohydrates': '64g'
          },
          tips: [
            'For a richer flavor, add a tablespoon of butter to the sauce along with the olive oil.',
            'You can add a pinch of red pepper flakes for extra spice.',
            'Garnish with fresh parsley instead of basil for a different flavor.'
          ],
          relatedRecipes: [
            {
              title: "Chicken Pot Pie",
              image: ChickenPotPie,
              slug: "chicken-pot-pie"
            },
            {
              title: "Beef Stroganoff",
              image: BeefStroganoff,
              slug: "beef-stroganoff"
            },
          ]
        },
        {
          title: 'Chicken Pot Pie',
          slug: 'chicken-pot-pie',
          time: '1 hour 30 minutes',
          difficulty: 'Medium',
          image: ChickenPotPie, // Added placeholder
          description: 'A comforting and hearty dish featuring a flaky crust filled with a creamy mixture of chicken, vegetables, and savory gravy.',
          prepTime: '1 hour 30 minutes',
          cookTime: '1 hour 30 minutes',
          totalTime: '1 hour 30 minutes',
          servings: 6-8,
          ingredients: [
            '1 package (about 14 ounces) refrigerated pie crust (2 crusts)',
            '2 cups cubed cooked chicken',
            '1 package (12 ounces) frozen mixed vegetables (carrots, green beans, corn, peas), thawed',
            '1 can (10.5 ounces) condensed cream of chicken soup',
            '1/2 cup milk',
            '6 Tbsp butter',
            '1/3 cup flour',
            '1 small onion, finely chopped',
            '1 carrot, peeled and diced',
            '1 celery stalk, diced',
            '2 tsp salt',
            '1/4 tsp black pepper',
            '1 tsp poultry seasoning',
            '1/2 tsp dried thyme'
          ],
          instructions: [
            'Preheat oven to 425°F (220°C).',
            'In a large pot, melt butter over medium-high heat, then add the onion, carrot, and celery. Cook, stirring occasionally, until the onion begins to turn translucent, about 3 minutes.',
            'Stir in the chicken or turkey, then sprinkle the flour over top and stir it until it\'s all combined with the meat and vegetables.',
            'Cook for 1 minute, then pour in the chicken broth (and wine, if using). Stir and let it cook and thicken. Once it starts to thicken add the turmeric, salt, pepper, and thyme.',
            'Add the half-and-half or cream, then stir the mixture and let it bubble and thicken, about 3 minutes.',
            'Roll 1 chilled pie crust disk into a 12” diameter circle. Carefully transfer it into a deep 9” pie dish.',
            'Spoon the chicken mixture into the pie plate.',
            'Place the remaining pie crust over the filling. Trim any excess. Crimp the edges of the top and bottom crusts together. Using a sharp knife, cut several slits in the top crust.',
            'Bake in the preheated oven until pastry is golden brown and filling is bubbly, 30-35 minutes. Cool for 10 minutes before serving.'
          ],
          nutrition: {
            'Calories': '360',
            'Fat': '28g',
            'Protein': '24g',
            'Carbohydrates': '45g'
          },
          tips: [
            'Make Ahead: The filling can be prepared ahead of time and refrigerated for up to 1 day.',
            'Freezer-Friendly: Assemble the pie and freeze it before baking.',
            'Crust Options: Use puff pastry instead of pie crust for a different texture.'
          ],
          relatedRecipes: [
            {
              title: "Penne alla Vodka",
              image: PenneAllaVodka,
              slug: "penne-alla-vodka"
            },
            {
              title: "Beef Stroganoff",
              image: BeefStroganoff,
              slug: "beef-stroganoff"
            },
          ]
        },
        {
          title: 'Beef Stroganoff',
          slug: 'beef-stroganoff',
          time: '1 hour 30 minutes',
          difficulty: 'Medium',
          image: BeefStroganoff, // Added
          description: 'Beef Stroganoff is a classic Russian dish made with tender pieces of beef in a creamy sauce, typically served over egg noodles.',
          prepTime: '1 hour 30 minutes',
          cookTime: '1 hour 30 minutes',
          totalTime: '1 hour 30 minutes',
          servings: 8,
          ingredients: [
            '2 pounds beef chuck roast, cut into 1/2-inch thick strips',
            'Salt and pepper to taste',
            '1 tablespoon vegetable oil',
            '8 ounces sliced mushrooms',
            '1/2 medium onion, sliced or diced',
            '1 tablespoon butter',
            '2 cloves garlic, minced',
            '1 1/2 tablespoons all-purpose flour',
            '1/2 cup white wine',
            '2 cups beef broth, divided',
            '3/4 cup crème fraîche',
            '1 tablespoon fresh chopped chives'
          ],
          instructions: [
            'Season beef generously with salt and pepper.',
            'Heat oil in a large skillet over high heat until nearly smoking. Stir in beef; cook, stirring constantly, for 6 to 7 minutes, until liquid evaporates and meat browns.',
            'Remove meat from the pan and set aside. Stir mushrooms, onions, and butter into the pan; cook and stir over medium heat until vegetables are lightly browned.',
            'Add garlic and stir for 30 seconds. Stir in flour; cook for 1 to 2 minutes until incorporated. Stir in wine and 1 cup of broth, scraping the bottom of the pan to release any browned bits. Bring to a simmer and cook until the sauce thickens, about 3 to 4 minutes.',
            'Return beef to the pan. Stir in remaining cup of broth; bring to a simmer and cook on low heat for about 1 hour, covered, until beef is tender and sauce is thick. Stir every 20 minutes.',
            'Stir in crème fraîche. Stir in chives. Season with salt and pepper to taste.',
            'Serve hot over egg noodles.'
          ],
          nutrition: {
            'Calories': '400',
            'Fat': '25g',
            'Protein': '25g',
            'Carbohydrates': '30g'
          },
          tips: [
            'For a richer flavor, use beef tenderloin or sirloin steak.',
            'Add a tablespoon of Dijon mustard to the sauce for a tangy twist.',
            'Serve with mashed potatoes or rice instead of egg noodles.'
          ],
          relatedRecipes: [
            {
              title: "Penne alla Vodka",
              image: PenneAllaVodka,
              slug: "penne-alla-vodka"
            },
            {
              title: "Chicken Pot Pie",
              image: ChickenPotPie,
              slug: "chicken-pot-pie"
            },
          ]
        }
      ]
    },
    {
      id: 'desserts-baking',
      title: 'Desserts & Baking',
      description: 'Sweet treats and baked goods.',
      image: dessertsBaking, // Added
      recipes: [
        {
          title: 'Next Level Key Lime Pie',
          slug: 'key-lime-pie',
          time: '1 hour (plus cooling time)',
          difficulty: 'Medium',
          image: NextLevelKeyLimePie, // Added
          description: 'A tangy and refreshing key lime pie with a buttery graham cracker crust and a sweet-sour creamy filling, topped with a light and airy meringue.',
          prepTime: '1 hour (plus cooling time)',
          cookTime: '1 hour (plus cooling time)',
          totalTime: '1 hour (plus cooling time)',
          servings: 8,
          ingredients: [
            'Graham crackers (crushed): 1 1/2 cups',
            'Unsalted butter (melted): 6 tablespoons',
            'Granulated sugar: 1/4 cup',
            'Sweetened condensed milk: 1 (14 ounce) can',
            'Key lime juice (freshly squeezed): 1/2 cup',
            'Egg yolks: 4 large',
            'Egg whites: 4 large',
            'Cream of tartar: 1/4 teaspoon',
            'Granulated sugar (for meringue): 1/2 cup',
            'Lime zest (for garnish): 1 teaspoon'
          ],
          instructions: [
            'Preheat oven to 350°F (175°C).',
            'In a medium bowl, combine the crushed graham crackers, melted butter, and 1/4 cup of sugar. Press the mixture firmly into the bottom and slightly up the sides of a 9-inch pie plate.',
            'Bake the crust for 8-10 minutes, then let it cool completely.',
            'In a separate bowl, whisk together the sweetened condensed milk, key lime juice, and egg yolks until smooth.',
            'Pour the filling into the cooled crust.',
            'Bake for 15-20 minutes, or until the filling is set but still slightly jiggly in the center. Let the pie cool completely before making the meringue.',
            'For the meringue, in a clean, grease-free bowl, beat the egg whites with the cream of tartar until soft peaks form.',
            'Gradually add the 1/2 cup of sugar, beating until stiff, glossy peaks form.',
            'Spread the meringue evenly over the cooled pie filling, ensuring it touches the crust to seal it.',
            'Return the pie to the oven and bake for 5-8 minutes, or until the meringue is lightly golden brown.',
            'Let the pie cool completely at room temperature, then refrigerate for at least 2 hours before serving.',
            'Garnish with fresh lime zest before slicing and serving.'
          ],
          nutrition: {
            'Calories': '3500',
            'Fat': '180g',
            'Protein': '50g',
            'Carbohydrates': '450g'
          },
          tips: [
            'For a smoother filling, ensure the key lime juice is freshly squeezed. Bottled juice can sometimes have a slightly different flavor.',
            'If you prefer a less sweet pie, you can slightly reduce the amount of sweetened condensed milk.',
            'For a different flavor profile, try adding a teaspoon of lime zest to the filling for an extra burst of citrus.'
          ],
          relatedRecipes: [
            {
              title: "Cinnamon Roll Focaccia",
              image: CinnamonRollFocaccia,
              slug: "cinnamon-roll-focaccia"
            },
            {
              title: "Tahini Mississippi Mud Pie with Sesame Brittle Garnish",
              image: TahiniMississippiMudPieWithSesameBrittleGarnish,
              slug: "tahini-mississippi-mud-pie"
            },
          ]
        },
        {
          title: 'Cinnamon Roll Focaccia',
          slug: 'cinnamon-roll-focaccia',
          time: '2 hours', // Time not provided
          difficulty: 'Medium', // Difficulty not provided
          image: CinnamonRollFocaccia, // Added
          description: 'Cinnamon Roll Focaccia is a unique and delicious dessert combining the rich, soft texture of focaccia with the sweet and spicy flavor of cinnamon rolls. Topped with a swirl of cinnamon and sugar, it’s a perfect balance of savory and sweet.',
          prepTime: '2 hours',
          cookTime: '2 hours',
          totalTime: '2 hours',
          servings: 8, // Servings not provided
          ingredients: [
            'Active dry yeast - 2 1/4 teaspoons',
            'Warm water - 1 cup',
            'All-purpose flour - 3 cups',
            'Granulated sugar - 2 tablespoons',
            'Salt - 1 teaspoon',
            'Olive oil - 2 tablespoons',
            'Ground cinnamon - 1 tablespoon',
            'Brown sugar - 1/2 cup',
            'Butter (melted) - 1/4 cup',
            'Powdered sugar (for glaze) - 1/4 cup',
            'Vanilla extract (for glaze) - 1 teaspoon'
          ],
          instructions: [
            'In a small bowl, combine warm water and active dry yeast. Let it sit for 5 minutes, or until the mixture becomes frothy.',
            'In a large mixing bowl, mix together flour, sugar, and salt. Add the yeast mixture and olive oil, then stir to form a dough.',
            'Knead the dough on a floured surface for about 5-7 minutes, or until smooth and elastic.',
            'Place the dough in a lightly greased bowl, cover with a clean towel, and let it rise for 1 hour or until doubled in size.',
            'Preheat your oven to 375°F (190°C). Punch down the risen dough and transfer it to a baking sheet, pressing it...' // Incomplete instruction
          ],
          nutrition: {
            'Calories': '2200',
            'Fat': '70g',
            'Protein': '30g',
            'Carbohydrates': '340g'
          }, // No nutrition
          tips: [
              'For a richer flavor, add a handful of chopped pecans or walnuts to the cinnamon-sugar mixture.',
              'If you prefer a less sweet version, reduce the amount of sugar in the glaze.',
              'Add a dash of nutmeg to the cinnamon-sugar mixture for extra spice.'
          ],
          relatedRecipes: [
            {
              title: "Next Level Key Lime Pie",
              image: NextLevelKeyLimePie,
              slug: "key-lime-pie"
            },
            {
              title: "Tahini Mississippi Mud Pie with Sesame Brittle Garnish",
              image: TahiniMississippiMudPieWithSesameBrittleGarnish,
              slug: "tahini-mississippi-mud-pie"
            },
          ]
        },
        {
          title: 'Tahini Mississippi Mud Pie with Sesame Brittle Garnish',
          slug: 'tahini-mississippi-mud-pie',
          time: 'Approximately 1 hour 30 minutes (including cooling time)',
          difficulty: 'Medium',
          image: TahiniMississippiMudPieWithSesameBrittleGarnish, // Replace with an appropriate image if needed
          description: 'A decadent twist on the classic Mississippi Mud Pie, featuring a rich chocolate filling swirled with nutty tahini and topped with a crunchy, homemade sesame brittle.',
          prepTime: '20 minutes',
          cookTime: '35 minutes',
          totalTime: 'Approximately 1 hour 30 minutes (including cooling time)',
          servings: 8,
          ingredients: [
                    // Crust
                    '1 1/2 cups Oreo cookies (finely crushed)',
                    '6 tablespoons unsalted butter (melted)',
        
                    // Chocolate Filling
                    '1/2 cup unsalted butter',
                    '1/4 cup unsweetened cocoa powder',
                    '1 cup granulated sugar',
                    '2 tablespoons all-purpose flour',
                    '2 large eggs (lightly beaten)',
                    '1 teaspoon vanilla extract',
                    '1/4 teaspoon salt',
        
                    // Tahini Swirl
                    '1/4 cup tahini',
                    '1 tablespoon powdered sugar',
        
                    // Sesame Brittle
                    '1/2 cup granulated sugar',
                    '2 tablespoons water',
                    '2 tablespoons sesame seeds',
                    '1 teaspoon unsalted butter',
                    '1/4 teaspoon baking soda'
                ],
          instructions: [
                    'Preheat oven to 350°F (175°C).',
                    'For the crust, combine crushed Oreo cookies and melted butter. Press mixture firmly into the bottom of a 9-inch pie plate.',
                    'In a saucepan, melt butter over medium heat. Whisk in cocoa powder and cook for 1 minute, stirring constantly.',
                    'Remove from heat and whisk in granulated sugar and flour until smooth.',
                    'Gradually whisk in the beaten eggs, then add vanilla extract and salt. Pour the chocolate filling into the prepared crust.',
                    'Whisk tahini and powdered sugar in a small bowl. Drizzle over chocolate filling and swirl using a knife or skewer.',
                    'Bake for 30-35 minutes, until the center is just set. Let cool completely, then refrigerate for at least 2 hours.',
                    'To make sesame brittle: Line a baking sheet with parchment paper. Heat sugar and water in a saucepan over medium heat, stirring until dissolved.',
                    'Increase heat and cook without stirring until deep amber. Remove from heat, stir in sesame seeds, butter, and baking soda.',
                    'Pour mixture onto baking sheet, spread thinly, and let cool until hardened. Break into shards.',
                    'Garnish chilled pie with sesame brittle before serving.'
                ],
          nutrition: {
                    calories: '4000',
                    fat: '250g',
                    protein: '60g',
                    carbohydrates: '450g'
                },
                tips: [
                    'For a more intense chocolate flavor, use melted dark chocolate instead of cocoa powder.',
                    'Add a pinch of sea salt to the brittle for a sweet-salty finish.',
                    'For a vegan version, use vegan alternatives for butter, cookies, and eggs.'
                ],
                relatedRecipes: [
                  {
                    title: "Next Level Key Lime Pie",
                    image: NextLevelKeyLimePie,
                    slug: "key-lime-pie"
                  },
                  {
                    title: "Cinnamon Roll Focaccia",
                    image: CinnamonRollFocaccia,
                    slug: "cinnamon-roll-focaccia"
                  }
                ]
          }
          ]
      },
      {
      id: 'global-fusion',
      title: 'Global Fusion',
      description: 'A collection of inventive recipes blending culinary traditions from around the world.',
      image: globalFusion,
      recipes: [
        {
          title: 'Kimchi Quesadillas',
          slug: 'kimchi-quesadillas',
          time: '20 minutes',
          difficulty: 'Easy',
          image: KimchiQuesadillas, // Replace with appropriate photo
          description: 'A delicious and easy fusion dish combining the spicy, fermented flavors of Korean kimchi with the cheesy comfort of Mexican quesadillas.',
          prepTime: '5 minutes',
          cookTime: '15 minutes',
          totalTime: '20 minutes',
          servings: 2,
          ingredients: [
            'Flour tortillas: 4',
            'Kimchi, chopped: 1 cup',
            'Shredded cheddar cheese: 1 cup',
            'Shredded Monterey Jack cheese: 1 cup',
            'Butter or oil: 1 tbsp',
            'Green onions, thinly sliced (for garnish): 2 tbsp'
          ],
          instructions: [
            'In a medium bowl, combine the chopped kimchi, cheddar cheese, and Monterey Jack cheese.',
            'Heat a large skillet or griddle over medium heat.',
            'Spread a thin layer of butter or oil on the skillet.',
            'Place one tortilla in the skillet.',
            'Sprinkle half of the cheese and kimchi mixture evenly over the tortilla.',
            'Top with another tortilla.',
            'Cook for 2-3 minutes per side, or until the tortilla is golden brown and the cheese is melted and gooey.',
            'Carefully remove the quesadilla from the skillet and place it on a cutting board.',
            'Repeat steps 4-7 with the remaining tortillas and filling.',
            'Cut each quesadilla into wedges.',
            'Garnish with sliced green onions and serve immediately.'
          ],
          nutrition: {
            calories: '1600',
            protein: '80g',
            fat: '100g',
            carbohydrates: '140g'
          },
          tips: [
            'Add cooked and shredded chicken, pork, or tofu for extra protein.',
            'For a spicier kick, add a drizzle of gochujang (Korean chili paste) to the kimchi mixture.',
            'Serve with a side of sour cream, salsa, or a dollop of plain yogurt.'
          ],
          relatedRecipes: [
                  {
                    title: "Thai Curry Risotto - Coconut Milk Infusion",
                    image: ThaiCurryRisotto,
                    slug: "thai-curry-risotto"
                  },
                  {
                    title: "Korean BBQ Tacos",
                    image: KoreanBBQTacos,
                    slug: "korean-bbq-tacos"
                  }
          ]
        },
        {
          title: 'Thai Curry Risotto - Coconut Milk Infusion',
          slug: 'thai-curry-risotto',
          time: '40 minutes',
          difficulty: 'Medium',
          image: ThaiCurryRisotto, // Replace with appropriate photo
          description: 'A flavorful and creamy risotto with a Thai twist, infused with coconut milk and the aromatic spices of Thai green curry.',
          prepTime: '10 minutes',
          cookTime: '30 minutes',
          totalTime: '40 minutes',
          servings: 4,
          ingredients: [
            '1 tablespoon coconut oil or olive oil',
            '2 tablespoons unsalted butter',
            '1 medium sweet onion, chopped',
            '1-2 cloves garlic, minced',
            '1 1/2 cups Arborio rice',
            '3 tablespoons Thai green curry paste',
            '4 cups vegetable stock or chicken stock, divided',
            '1 can (14 oz) full-fat coconut milk',
            '2 tablespoon fish sauce',
            '1 tablespoon palm sugar (or brown sugar)',
            '4 lime leaves',
            '1 lime, juiced',
            'Fresh cilantro, roughly chopped, for garnish',
            'Salt and pepper to taste',
            'Optional: 1 lb shrimp, peeled and deveined'
          ],
          instructions: [
            'In a saucepan, combine the chicken broth, coconut milk, lime leaves, palm sugar, and fish sauce. Simmer for 10 minutes and remove the lime leaves.',
            'In a deep skillet or pot over medium heat, add coconut oil and butter.',
            'Add chopped onions and sauté until translucent, about 4-5 minutes.',
            'Add garlic and cook for 1 minute.',
            'Stir in Arborio rice and toast for about 4-5 minutes until golden.',
            'Mix in green curry paste and cook for 1 minute.',
            'Add the hot stock mixture one cup at a time, stirring until absorbed, for about 20-25 minutes.',
            'Stir in lime juice and cilantro. Season with salt and pepper.',
            'If using shrimp, add them during the last few minutes of cooking.',
            'Garnish with cilantro and a squeeze of lime juice.'
          ],
          nutrition: {
            calories: '660',
            protein: '30g',
            fat: '35g',
            carbohydrates: '53g'
          }, // Exact values not provided
          tips: [
            'For a richer flavor, use full-fat coconut milk.',
            'Adjust the amount of green curry paste to your spice preference.',
            'Add vegetables like bell peppers, zucchini, or bok choy.'
          ],
          relatedRecipes: [
                  {
                    title: "Kimchi Quesadillas",
                    image: KimchiQuesadillas,
                    slug: "kimchi-quesadillas"
                  },
                  {
                    title: "Korean BBQ Tacos",
                    image: KoreanBBQTacos,
                    slug: "korean-bbq-tacos"
                  }
          ]
        },
        {
          title: 'Korean BBQ Tacos',
          slug: 'korean-bbq-tacos',
          time: '4 hours 20 minutes - overnight + 30 minutes',
          difficulty: 'Medium',
          image: KoreanBBQTacos, // Replace with appropriate photo
          description: 'A delicious fusion of Korean BBQ and Mexican tacos, featuring tender, flavorful beef, a crunchy slaw, and a tangy sauce, all served in warm tortillas.',
          prepTime: '4+ hours (marinating)',
          cookTime: '30 minutes',
          totalTime: '4 hours 20 minutes - overnight + 30 minutes',
          servings: 6,
          ingredients: [
            'Beef (Flank Steak or similar): 1.5 lbs',
            'Soy Sauce: 1/4 cup',
            'Brown Sugar: 1/4 cup',
            'Sesame Oil: 4 Tbsp',
            'Garlic: 4 cloves',
            'Fresh Ginger: 1 Tbsp',
            'Ground Black Pepper: 1 tsp',
            'Hot Water: 1/4 cup',
            'Flour Tortillas: 12-14 small',
            'Purple Cabbage: 1 small',
            'Cilantro: 1/3 bunch',
            'Avocado: 1, sliced'
          ],
          instructions: [
            'Thinly slice the beef against the grain.',
            'Combine soy sauce, brown sugar, sesame oil, garlic, ginger, black pepper, and hot water in a bowl.',
            'Marinate beef in the mixture for at least 4 hours, preferably overnight.',
            'Cook beef in a skillet over medium-high heat until browned and cooked through.',
            'Warm tortillas.',
            'Fill tortillas with cooked beef.',
            'Top with purple cabbage, cilantro, and avocado.',
            'Drizzle with taco sauce or Sriracha-lime crema.'
          ],
          nutrition: {
            calories: '400',
            protein: '15g',
            fat: '19g',
            carbohydrates: '21g'
          },
          tips: [
            'Add a squeeze of lime juice for brightness.',
            'Use spicy mayo or gochujang sauce for extra flavor.',
            'Top with pickled red onions or kimchi.'
          ],
          relatedRecipes: [
                  {
                    title: "Kimchi Quesadillas",
                    image: KimchiQuesadillas,
                    slug: "kimchi-quesadillas"
                  },
                  {
                    title: "Thai Curry Risotto - Coconut Milk Infusion",
                    image: ThaiCurryRisotto,
                    slug: "thai-curry-risotto"
                  }
          ]
        }
      ]
    },
    {
      id: 'healthy-bowls',
      title: 'Healthy Bowls',
      description: 'A vibrant collection of nutritious and flavorful bowls designed to nourish your body and satisfy your taste buds.',
      image: healthyBowls, // Replace with relevant image
      recipes: [
        {
          title: 'Turmeric Buddha Bowl',
          slug: 'turmeric-buddha-bowl',
          time: '40 minutes',
          difficulty: 'Easy',
          image: TurmericBuddhaBowl, // Replace with relevant image
          description:
            'A nourishing and flavorful Buddha bowl featuring roasted turmeric-spiced chickpeas and sweet potatoes, drizzled with a creamy tahini dressing.',
          prepTime: '10 minutes',
          cookTime: '30 minutes',
          totalTime: '40 minutes',
          servings: 2,
          ingredients: [
            '1 (15 oz) can chickpeas, drained and rinsed',
            '1 large sweet potato, peeled and cubed',
            '2 tbsp tahini',
            '1 tbsp lemon juice',
            '2 tbsp water',
            '1 tsp turmeric powder',
            '2 tbsp olive oil',
            'Salt, to taste',
            'Black pepper, to taste',
            '2 cups mixed greens',
            '1 cup cooked quinoa or brown rice',
            'Optional garnishes: cilantro, sesame seeds'
          ],
          instructions: [
            'Preheat oven to 200°C (400°F).',
            'Toss sweet potato cubes with 1 tbsp olive oil, salt, and pepper. Roast for 20–25 minutes.',
            'Toss chickpeas with remaining 1 tbsp olive oil, turmeric, salt, and pepper. Roast for 15–20 minutes.',
            'Whisk tahini, lemon juice, and water until smooth. Season with salt.',
            'In each bowl, layer mixed greens and cooked grains.',
            'Add roasted sweet potatoes and chickpeas.',
            'Drizzle with tahini dressing and garnish with cilantro or sesame seeds.',
            'Serve immediately.'
          ],
          nutrition: {
            calories: '700',
            protein: '25g',
            fat: '35g',
            carbohydrates: '80g'
          },
          tips: [
            'Add extra veggies like broccoli, cauliflower, or bell peppers.',
            'For spicy chickpeas, add a pinch of cayenne.',
            'Swap grains with farro, couscous, or lentils.'
          ],
          relatedRecipes: [
                  {
                    title: "Mediterranean Quinoa Bowl",
                    image: MediterraneanQuinoaBowl,
                    slug: "mediterranean-quinoa-bowl"
                  },
                  {
                    title: "Bang Bang Salmon Bowl",
                    image: BangBangSalmonBowl,
                    slug: "bang-bang-salmon-bowl"
                  }
          ]
        },
        {
          title: 'Mediterranean Quinoa Bowl',
          slug: 'mediterranean-quinoa-bowl',
          time: '30 minutes',
          difficulty: 'Easy',
          image: MediterraneanQuinoaBowl, // Replace with relevant image
          description:
            'A healthy and flavorful bowl packed with Mediterranean ingredients like quinoa, feta cheese, olives, and a delicious roasted red pepper sauce.',
          prepTime: '10 minutes',
          cookTime: '20 minutes',
          totalTime: '30 minutes',
          servings: 4,
          ingredients: [
            '3 cups cooked quinoa',
            '16 oz jar roasted red peppers, drained',
            '3–4 cloves garlic',
            '1–2 tbsp lemon juice',
            '¼ to ½ cup olive oil',
            '½ cup almonds',
            '½ cup feta cheese',
            '1 cup sliced cucumber',
            'Kalamata olives, as desired',
            '¼ cup chopped parsley',
            '1¼ cup chickpeas (optional), drained and rinsed',
            '½ cup thinly sliced red onion (optional)',
            'Spices to taste (salt, pepper, cumin, smoked paprika)'
          ],
          instructions: [
            'Cook quinoa according to package instructions and let cool slightly.',
            'Blend roasted red peppers, garlic, lemon juice, olive oil, and almonds into a sauce.',
            'Toast almonds in a dry skillet (optional).',
            'Slice cucumber and red onion.',
            'Divide quinoa into bowls and add veggies, feta, olives, and chickpeas if using.',
            'Top with red pepper sauce and garnish with parsley and spices.',
            'Serve immediately or chill for later.'
          ],
          nutrition: {
            note: 'Nutritional values vary depending on specific brands and portions. Use online tools for detailed analysis.'
          },
          tips: [
            'Add spinach, kale, or bell peppers.',
            'Swap feta for goat cheese or halloumi.',
            'Add hummus or tzatziki for extra richness.'
          ],
          relatedRecipes: [
                  {
                    title: "Turmeric Buddha Bowl",
                    image: TurmericBuddhaBowl,
                    slug: "turmeric-buddha-bowl"
                  },
                  {
                    title: "Bang Bang Salmon Bowl",
                    image: BangBangSalmonBowl,
                    slug: "bang-bang-salmon-bowl"
                  }
          ]
        },
        {
          title: 'Bang Bang Salmon Bowl',
          slug: 'bang-bang-salmon-bowl',
          time: '40 minutes',
          difficulty: 'Easy',
          image: BangBangSalmonBowl, // Replace with relevant image
          description:
            'A flavorful and nutritious bowl featuring baked salmon coated in a spicy-sweet "bang bang" sauce, served over rice with edamame salsa and a drizzle of spicy mayo.',
          prepTime: '20 minutes',
          cookTime: '20 minutes',
          totalTime: '40 minutes',
          servings: 2,
          ingredients: [
            // Salmon
            '1 pound salmon fillets, skin removed and cubed',
            '2 tbsp low sodium tamari or soy sauce',
            '1 tbsp sweet chili sauce',
            '1 tbsp rice vinegar',
            '1/2 tsp garlic powder',
  
            // Bang Bang Sauce
            '1/3 cup plain Greek yogurt OR 1/4 cup avocado mayo + 3 tbsp Greek yogurt',
            '2 tbsp mayonnaise',
            '3 tbsp sweet chili sauce',
            '1 tsp sriracha',
            'Pinch of salt',
  
            // Edamame Salsa
            '2 cups diced cucumber',
            '1/2 cup shelled edamame',
            '2 green onions, thinly sliced',
            '2 tbsp chopped cilantro',
            '2 tsp sesame seeds',
            'Juice of 1 lime',
            'Salt to taste',
  
            // Other
            'Cooked rice (jasmine or any preferred variety)'
          ],
          instructions: [
            'Prepare rice according to package directions.',
            'Whisk all Bang Bang sauce ingredients and refrigerate until ready.',
            'Marinate salmon in soy sauce, chili sauce, vinegar, and garlic powder. Toss to coat.',
            'Bake salmon at 450°F (232°C) for 7–10 minutes or until golden and cooked through.',
            'Mix all salsa ingredients in a bowl.',
            'Assemble bowls: Add rice, baked salmon, salsa, and drizzle Bang Bang sauce on top.',
            'Serve immediately.'
          ],
          nutrition: {
            calories: '600',
            protein: '40g',
            fat: '30g',
            carbohydrates: '40g'
          },
          tips: [
            'Add red pepper flakes for more heat.',
            'Use another hot sauce or chili garlic paste if desired.',
            'Top with avocado slices or seaweed crisps for extra flavor and texture.'
          ],
          relatedRecipes: [
                  {
                    title: "Turmeric Buddha Bowl",
                    image: TurmericBuddhaBowl,
                    slug: "turmeric-buddha-bowl"
                  },
                  {
                    title: "Mediterranean Quinoa Bowl",
                    image: MediterraneanQuinoaBowl,
                    slug: "mediterranean-quinoa-bowl"
                  }
          ]
        }
      ]
    },
    {
      id: 'one-pot-wonders',
      title: "One-Pot Wonders",
      description: "Hearty and satisfying meals prepared in a single pot or pan, perfect for easy clean-up and full flavor.",
      image: onePotWonders, // Update with a more relevant image if desired
      recipes: [
        {
          title: "Creamy Cajun Chicken Pasta",
          slug: "creamy-cajun-chicken-pasta",
          time: "40 minutes",
          difficulty: "Medium",
          image: CreamyCajunChickenPasta, // Replace with a fitting image
          description: "A flavorful and comforting dish featuring tender Cajun-spiced chicken and perfectly cooked pasta tossed in a creamy, Alfredo-style sauce.",
          prepTime: "15 minutes",
          cookTime: "25 minutes",
          totalTime: "40 minutes",
          servings: 6,
          ingredients: [
            "2 chicken breasts",
            "1 pound penne pasta",
            "1.5 cups heavy cream",
            "4 tablespoons butter",
            "3 cloves garlic, minced",
            "1 cup Parmesan cheese, grated",
            "2 tablespoons Cajun seasoning",
            "1 tablespoon olive oil",
            "Salt, to taste",
            "Black pepper, to taste",
            "2 tablespoons fresh parsley, chopped"
          ],
          instructions: [
            "Season chicken breasts with Cajun seasoning, salt, and pepper.",
            "Heat olive oil in a large skillet. Cook chicken 5–7 minutes per side, remove and slice.",
            "Boil pasta until al dente, then drain and set aside.",
            "In same skillet, melt butter and sauté garlic until fragrant.",
            "Add heavy cream and simmer. Stir in Parmesan until smooth.",
            "Season sauce with salt and pepper.",
            "Toss pasta and chicken into the sauce.",
            "Garnish with chopped parsley before serving."
          ],
          nutrition: {
            calories: "3000",
            protein: "180g",
            fat: "200g",
            carbohydrates: "250g"
          },
          tips: [
            "Add vegetables like bell peppers or mushrooms for extra flavor.",
            "For spicier pasta, include red pepper flakes.",
            "Try different pasta shapes like fettuccine or rigatoni."
          ],
          relatedRecipes: [
                  {
                    title: "Beef & Mushroom Stroganoff",
                    image: BeefMushroomStroganoff,
                    slug: "beef-mushroom-stroganoff"
                  },
                  {
                    title: "Chicken Chasseur (Hunter's Chicken)",
                    image: ChickenChasseur,
                    slug: "chicken-chasseur"
                  }
          ]
        },
        {
          title: "Beef & Mushroom Stroganoff",
          slug: "beef-mushroom-stroganoff",
          time: "30 minutes",
          difficulty: "Medium",
          image: BeefMushroomStroganoff, // Replace with a fitting image
          description: "A classic dish featuring tender beef and earthy mushrooms in a rich and creamy sauce, served with noodles, rice, or mashed potatoes.",
          prepTime: "10 minutes",
          cookTime: "20 minutes",
          totalTime: "30 minutes",
          servings: 4,
          ingredients: [
            "1 lb beef sirloin or tenderloin",
            "8 oz cremini mushrooms",
            "1 medium yellow onion",
            "2 cloves garlic",
            "2 tbsp all-purpose flour",
            "1 cup beef broth",
            "1/2 cup sour cream",
            "1 tbsp Dijon mustard",
            "1 tsp Worcestershire sauce",
            "2 tbsp olive oil or butter",
            "Salt, to taste",
            "Black pepper, to taste",
            "Fresh parsley, for garnish"
          ],
          instructions: [
            "Slice beef and season with salt and pepper.",
            "Cook beef until browned, then set aside.",
            "Sauté onion and garlic in the same pan until soft.",
            "Add mushrooms and cook until browned.",
            "Add flour and stir, then gradually add broth.",
            "Simmer to thicken. Stir in mustard and Worcestershire.",
            "Reduce heat and stir in sour cream. Do not boil.",
            "Return beef to the skillet, heat through.",
            "Garnish with parsley and serve over noodles, rice, or potatoes."
          ],
          nutrition: {
            calories: "2200",
            protein: "150g",
            fat: "130g",
            carbohydrates: "80g"
          },
          tips: [
            "Use dry red wine after cooking mushrooms for extra flavor.",
            "Add crème fraîche or extra sour cream for richness.",
            "Experiment with different mushrooms for complexity."
          ],
          relatedRecipes: [
                  {
                    title: "Creamy Cajun Chicken Pasta",
                    image: CreamyCajunChickenPasta,
                    slug: "creamy-cajun-chicken-pasta"
                  },
                  {
                    title: "Chicken Chasseur (Hunter's Chicken)",
                    image: ChickenChasseur,
                    slug: "chicken-chasseur"
                  }
          ]
        },
        {
          title: "Chicken Chasseur (Hunter's Chicken)",
          slug: "chicken-chasseur",
          time: "60 minutes",
          difficulty: "Medium",
          image: ChickenChasseur, // Replace with a fitting image
          description: "A French classic with chicken simmered in a sauce of mushrooms, tomatoes, white wine, and herbs—rich, rustic, and deeply satisfying.",
          prepTime: "15 minutes",
          cookTime: "45 minutes",
          totalTime: "60 minutes",
          servings: 4,
          ingredients: [
            "6 chicken pieces (thighs or drumsticks)",
            "250g cremini mushrooms",
            "1 medium onion",
            "2 garlic cloves",
            "120ml dry white wine",
            "400g canned diced tomatoes",
            "1 tbsp tomato paste",
            "120ml chicken broth",
            "2–3 fresh thyme sprigs",
            "1 tbsp fresh tarragon leaves, chopped",
            "2 tbsp olive oil",
            "2 tbsp all-purpose flour",
            "Salt, to taste",
            "Black pepper, to taste"
          ],
          instructions: [
            "Season chicken with salt and pepper, dredge in flour.",
            "Brown chicken in olive oil, then remove.",
            "Sauté onions, then add mushrooms and cook until browned.",
            "Add garlic and tomato paste, cook 1 minute.",
            "Deglaze with wine, simmer to reduce.",
            "Add tomatoes, broth, and thyme. Simmer.",
            "Return chicken to the pot, cover, and simmer 25–30 minutes.",
            "Stir in tarragon at the end. Remove thyme sprigs.",
            "Serve hot with crusty bread or mashed potatoes."
          ],
          nutrition: {
            calories: "2200",
            protein: "220g",
            fat: "120g",
            carbohydrates: "80g"
          },
          tips: [
            "Use bone-in, skin-on chicken for deeper flavor.",
            "Add Cognac or brandy after wine for added depth.",
            "Garnish with parsley or chives for freshness."
          ],
          relatedRecipes: [
                  {
                    title: "Creamy Cajun Chicken Pasta",
                    image: CreamyCajunChickenPasta,
                    slug: "creamy-cajun-chicken-pasta"
                  },
                  {
                    title: "Beef & Mushroom Stroganoff",
                    image: BeefMushroomStroganoff,
                    slug: "beef-mushroom-stroganoff"
                  },
          ]
        }
      ]
    },
    {
      id: 'plant-forward',
      title: "Plant-Forward",
      description: "Vibrant and wholesome recipes that highlight vegetables, legumes, and plant-based ingredients.",
      image: plantForward, // Placeholder, update as needed
      recipes: [
        {
          title: "Green Bean Pasta with Cashew Pesto",
          slug: "green-bean-pasta-cashew-pesto",
          time: "35 minutes",
          difficulty: "Easy",
          image: GreenBeanPastaCashewPesto, // Replace with actual image
          description: "A vibrant and flavorful pasta dish featuring tender green beans tossed in a creamy, homemade cashew pesto.",
          prepTime: "10 minutes",
          cookTime: "25 minutes",
          totalTime: "35 minutes",
          servings: 4,
          ingredients: [
            "300g pasta (linguine or fettuccine)",
            "250g fresh green beans, trimmed",
            "100g raw cashews",
            "2 cups fresh basil leaves, packed",
            "2 garlic cloves",
            "3 tablespoons nutritional yeast",
            "2 tablespoons lemon juice",
            "1/4 cup olive oil + extra for drizzling",
            "Salt, to taste",
            "Black pepper, to taste",
            "Water, as needed"
          ],
          instructions: [
            "Bring a large pot of salted water to a boil. Add the pasta and cook according to package directions.",
            "In the last 3–4 minutes of cooking, add the trimmed green beans to the boiling water.",
            "In a food processor, combine cashews, basil, garlic, nutritional yeast, and lemon juice.",
            "Drizzle in olive oil while blending until smooth and creamy. Add water as needed.",
            "Season with salt and pepper to taste.",
            "Drain pasta and green beans, reserving 1/2 cup of the cooking water.",
            "Toss pasta and beans with pesto in the pot.",
            "Add reserved water if needed for a smoother sauce.",
            "Serve with a drizzle of olive oil and garnish with toasted cashews or basil."
          ],
          nutrition: {
            calories: "2200",
            protein: "75g",
            fat: "120g",
            carbohydrates: "250g"
          },
          tips: [
            "Lightly toast cashews before blending for extra flavor.",
            "Add red pepper flakes to the pesto for heat.",
            "Mix in cherry tomatoes or spinach for added nutrients."
          ],
          relatedRecipes: [
                  {
                    title: "Sneaky Chickpea Burgers",
                    image: SneakyChickpeaBurgers,
                    slug: "sneaky-chickpea-burgers"
                  },
                  {
                    title: "Cauliflower Tikka Masala",
                    image: CauliflowerTikkaMasala,
                    slug: "cauliflower-tikka-masala"
                  }
          ]
        },
        {
          title: "Sneaky Chickpea Burgers",
          slug: "sneaky-chickpea-burgers",
          time: "30 minutes",
          difficulty: "Easy",
          image: SneakyChickpeaBurgers, // Replace with actual image
          description: "Gluten-free chickpea burgers packed with flavor and plant-based protein. Easy to make and satisfying for any meal.",
          prepTime: "10 minutes",
          cookTime: "20 minutes",
          totalTime: "30 minutes",
          servings: 4,
          ingredients: [
            "2 cans (15 oz each) chickpeas, drained and rinsed",
            "1/2 cup gluten-free oats",
            "1/4 cup finely chopped red onion",
            "2 garlic cloves, minced",
            "1/4 cup chopped fresh parsley",
            "1 teaspoon ground cumin",
            "1/2 teaspoon smoked paprika",
            "2 tablespoons nutritional yeast",
            "1 tablespoon lemon juice",
            "1 tablespoon olive oil",
            "Salt, to taste",
            "Black pepper, to taste",
            "4 gluten-free burger buns",
            "4 lettuce leaves",
            "1 large tomato, sliced",
            "1/4 red onion, sliced",
            "Optional toppings: avocado, pickles, vegan cheese"
          ],
          instructions: [
            "Mash chickpeas in a bowl until mostly smooth but slightly chunky.",
            "Mix in oats, onion, garlic, parsley, spices, nutritional yeast, lemon juice, olive oil, salt, and pepper.",
            "Form into 4 patties.",
            "Heat olive oil in a skillet and cook patties 4–5 minutes per side, or until golden.",
            "Alternatively, bake at 375°F (190°C) for 20–25 minutes, flipping halfway.",
            "Serve on buns with lettuce, tomato, onion, and desired toppings."
          ],
          nutrition: {
            calories: "1600",
            protein: "50g",
            fat: "70g",
            carbohydrates: "200g"
          },
          tips: [
            "Add Dijon mustard or hot sauce for extra flavor.",
            "Incorporate shredded carrots or zucchini into the patties.",
            "Top with avocado, sprouts, or vegan cheese for variety."
          ],
          relatedRecipes: [
                  {
                    title: "Green Bean Pasta with Cashew Pesto",
                    image: GreenBeanPastaCashewPesto,
                    slug: "green-bean-pasta-cashew-pesto"
                  },
                  {
                    title: "Cauliflower Tikka Masala",
                    image: CauliflowerTikkaMasala,
                    slug: "cauliflower-tikka-masala"
                  }
          ]
        },
        {
          title: "Cauliflower Tikka Masala",
          slug: "cauliflower-tikka-masala",
          time: "30 minutes",
          difficulty: "Easy",
          image: CauliflowerTikkaMasala, // Replace with actual image
          description: "A flavorful vegan take on the classic Tikka Masala with roasted cauliflower in a creamy, spiced tomato sauce.",
          prepTime: "10 minutes",
          cookTime: "20 minutes",
          totalTime: "30 minutes",
          servings: 4,
          ingredients: [
            "1 medium head cauliflower, cut into florets",
            "2 tablespoons olive oil",
            "1 medium onion, chopped",
            "2 garlic cloves, minced",
            "1-inch piece ginger, grated",
            "2 tablespoons tomato paste",
            "1 can (14.5 oz) diced tomatoes",
            "1/2 cup vegetable broth",
            "1/2 cup full-fat coconut milk",
            "2 teaspoons garam masala",
            "1 teaspoon ground cumin",
            "1/2 teaspoon turmeric powder",
            "1/4–1/2 teaspoon chili powder",
            "Salt, to taste",
            "1 tablespoon lemon juice",
            "Fresh cilantro for garnish"
          ],
          instructions: [
            "Preheat oven to 400°F (200°C). Toss cauliflower with 1 tbsp olive oil and salt, roast for 15–20 mins.",
            "Heat 1 tbsp olive oil in a skillet. Cook onion until softened.",
            "Add garlic and ginger, cook 1 min.",
            "Add tomato paste and spices, cook 1 min until fragrant.",
            "Add diced tomatoes and broth. Simmer for 5 mins.",
            "Stir in coconut milk and lemon juice. Simmer gently.",
            "Add roasted cauliflower and stir to coat. Simmer 5 more mins.",
            "Season with salt. Garnish with cilantro. Serve hot."
          ],
          nutrition: {
            calories: "1000",
            protein: "25g",
            fat: "70g",
            carbohydrates: "100g"
          },
          tips: [
            "Marinate cauliflower in yogurt and spices before roasting for richer flavor.",
            "Add peas, bell peppers, or spinach for more texture and nutrients.",
            "Adjust chili powder to taste or add cayenne for heat."
          ],
          relatedRecipes: [
                  {
                    title: "Green Bean Pasta with Cashew Pesto",
                    image: GreenBeanPastaCashewPesto,
                    slug: "green-bean-pasta-cashew-pesto"
                  },
                  {
                    title: "Sneaky Chickpea Burgers",
                    image: SneakyChickpeaBurgers,
                    slug: "sneaky-chickpea-burgers"
                  }
          ]
        }
      ]
    },
    {
      id: 'quick-easy',
      title: 'Quick & Easy',
      description: 'Fast, delicious meals for busy days.',
      image: quickEasy, // Use a relevant image for the category
      recipes: [
        {
          title: 'Pork & Peanut Dragon Noodles',
          slug: 'pork-peanut-dragon-noodles',
          time: '30 minutes',
          difficulty: 'Medium',
          image: PorkPeanutDragonNoodles, // Replace with a fitting image
          description: 'Savory stir-fried noodles with tender pork, crisp vegetables, and a fiery peanut sauce that will ignite your taste buds.',
          prepTime: '10 minutes',
          cookTime: '20 minutes',
          totalTime: '30 minutes',
          servings: 2,
          ingredients: [
            'Dried egg noodles: 200g',
            'Pork tenderloin, thinly sliced: 250g',
            'Bell pepper, thinly sliced: 1',
            'Carrot, julienned: 1',
            'Broccoli florets: 1 cup',
            'Scallions, chopped: 2',
            'Garlic, minced: 2 cloves',
            'Ginger, grated: 1 tbsp',
            'Soy sauce: 3 tbsp',
            'Peanut butter: 2 tbsp',
            'Rice vinegar: 1 tbsp',
            'Honey: 1 tsp',
            'Sriracha or chili garlic sauce: 1–2 tsp',
            'Sesame oil: 1 tbsp',
            'Vegetable oil: 2 tbsp',
            'Chopped peanuts (for garnish): 2 tbsp',
            'Fresh cilantro or basil (for garnish): Optional'
          ],
          instructions: [
            'Cook noodles according to package directions. Drain and set aside.',
            'Whisk together soy sauce, peanut butter, rice vinegar, honey, sriracha, and sesame oil.',
            'Heat oil in a large skillet or wok. Stir-fry pork until browned.',
            'Add garlic and ginger, cook for 30 seconds.',
            'Add bell pepper and carrot, stir-fry for 2–3 minutes.',
            'Add broccoli, stir-fry another 2–3 minutes.',
            'Pour in the sauce and toss to coat.',
            'Add noodles and mix gently.',
            'Stir in scallions.',
            'Serve garnished with peanuts and herbs.'
          ],
          nutrition: {
            calories: '1500 kcal',
            protein: '75g',
            fat: '70g',
            carbohydrates: '160g'
          },
          tips: [
            'Use tofu or tempeh for a vegetarian version.',
            'Add snap peas, mushrooms, or bok choy.',
            'Adjust sriracha for desired heat.'
          ],
          relatedRecipes: [
                  {
                    title: "Creamy Tomato Spinach Pasta",
                    image: CreamyTomatoSpinachPasta,
                    slug: "creamy-tomato-spinach-pasta"
                  },
                  {
                    title: "Hearty Dumpling Soup",
                    image: HeartyDumplingSoup,
                    slug: "hearty-dumpling-soup"
                  }
          ]
        },
        {
          title: 'Creamy Tomato Spinach Pasta',
          slug: 'creamy-tomato-spinach-pasta',
          time: '30 minutes',
          difficulty: 'Easy',
          image: CreamyTomatoSpinachPasta, // Replace with a suitable image
          description: 'A comforting and flavorful pasta dish featuring a rich and creamy tomato sauce, wilted spinach, and perfectly cooked pasta.',
          prepTime: '10 minutes',
          cookTime: '20 minutes',
          totalTime: '30 minutes',
          servings: 4,
          ingredients: [
            'Pasta (penne, spaghetti, or your choice): 300g',
            'Olive oil: 2 tablespoons',
            'Onion, finely chopped: 1 medium',
            'Garlic, minced: 2 cloves',
            'Crushed tomatoes: 400g can',
            'Heavy cream: 120ml',
            'Fresh spinach: 150g',
            'Dried oregano: 1 teaspoon',
            'Salt: to taste',
            'Black pepper: to taste',
            'Grated Parmesan cheese: for serving',
            'Fresh basil leaves: for garnish'
          ],
          instructions: [
            'Cook pasta until al dente. Reserve ½ cup pasta water and drain.',
            'Heat olive oil in a skillet. Sauté onion until translucent.',
            'Add garlic and cook until fragrant.',
            'Add crushed tomatoes, oregano, salt, and pepper. Simmer 10–15 minutes.',
            'Stir in cream and cook 2–3 more minutes.',
            'Add spinach and cook until wilted.',
            'Add pasta and coat with sauce. Use pasta water to thin if needed.',
            'Serve with Parmesan and basil.'
          ],
          nutrition: {
            calories: '2200 kcal',
            protein: '80g',
            fat: '120g',
            carbohydrates: '250g'
          },
          tips: [
            'Add cooked chicken, shrimp, or sausage for extra protein.',
            'Add red pepper flakes for spice.',
            'Mix in mozzarella or ricotta for a cheesier dish.'
          ],
          relatedRecipes: [
                  {
                    title: "Pork & Peanut Dragon Noodles",
                    image: PorkPeanutDragonNoodles,
                    slug: "pork-peanut-dragon-noodles"
                  },
                  {
                    title: "Hearty Dumpling Soup",
                    image: HeartyDumplingSoup,
                    slug: "hearty-dumpling-soup"
                  }
          ]
        },
        {
          title: 'Hearty Dumpling Soup',
          slug: 'hearty-dumpling-soup',
          time: '45 minutes',
          difficulty: 'Easy',
          image: HeartyDumplingSoup, // Replace with an appropriate image
          description: 'A comforting and flavorful soup with tender dumplings simmered in savory broth and vegetables — perfect for chilly days.',
          prepTime: '15 minutes',
          cookTime: '30 minutes',
          totalTime: '45 minutes',
          servings: 4,
          ingredients: [
            'All-purpose flour: 1 cup',
            'Water: ½ cup',
            'Salt: ¼ tsp',
            'Vegetable broth: 6 cups',
            'Carrots, diced: 1 medium',
            'Celery, diced: 2 stalks',
            'Onion, chopped: ½ medium',
            'Garlic, minced: 2 cloves',
            'Fresh parsley, chopped: 2 tbsp',
            'Black pepper: to taste'
          ],
          instructions: [
            'Mix flour and salt, then add water to form dough.',
            'Knead for 5–7 minutes and let rest 15 minutes.',
            'Heat broth in a large pot. Add carrots, celery, and onion. Cook 5–7 minutes.',
            'Add garlic and cook 1 minute.',
            'Roll and cut dumpling dough into small pieces.',
            'Drop dumplings into simmering broth and cook 10–15 minutes until they float.',
            'Season with salt and pepper.',
            'Stir in parsley before serving.'
          ],
          nutrition: {
            calories: '1500',
            protein: '40g',
            fat: '20g',
            carbohydrates: '250g'
          },
          tips: [
            'Add cooked chicken, pork, or tofu for extra protein.',
            'Include vegetables like peas, mushrooms, or corn.',
            'Enhance broth with soy sauce, bay leaf, or herbs.'
          ],
          relatedRecipes: [
                  {
                    title: "Pork & Peanut Dragon Noodles",
                    image: PorkPeanutDragonNoodles,
                    slug: "pork-peanut-dragon-noodles"
                  },
                  {
                    title: "Creamy Tomato Spinach Pasta",
                    image: CreamyTomatoSpinachPasta,
                    slug: "creamy-tomato-spinach-pasta"
                  }
          ]
        }
      ]
    },
    {
      id: 'street-food-inspired',
      title: "Street Food Inspired",
      description: "A collection of delicious, vibrant street food dishes from around the world.",
      image: streetFoodInspired, // Use a relevant image
      recipes: [
        {
          title: "Low-Fat Singapore Chilli Crab with Bao Buns",
          slug: "low-fat-singapore-chilli-crab",
          time: "60 minutes",
          difficulty: "Medium",
          image: ChilliCrabWithBaoBuns, // Use a relevant image
          description: "A healthier take on the classic Singapore Chilli Crab, featuring succulent crab meat simmered in a flavorful, less oily chilli-tomato gravy—perfect for scooping up with soft, steamed bao buns.",
          prepTime: "15 minutes",
          cookTime: "30 minutes",
          totalTime: "60 minutes",
          servings: 4,
          ingredients: [
            "1 kg Live or Fresh Crab",
            "8 cloves Shallots",
            "6 cloves Garlic",
            "4–6 Fresh Red Chillies (adjust to spice preference)",
            "3 cm knob Ginger",
            "2 stalks Lemongrass (bruised)",
            "3 tbsp Tomato Paste",
            "200 ml Low-Sodium Chicken Broth",
            "2 Egg Whites",
            "1 tbsp Cornstarch",
            "2 tbsp Light Soy Sauce",
            "1 tbsp Rice Vinegar",
            "1–2 tsp Sugar Substitute (e.g., Stevia or Erythritol, adjust to taste)",
            "1 tbsp Lime Juice",
            "Fresh Coriander (for garnish)",
            "8–12 Bao Buns"
          ],
          instructions: [
            "Clean and prep the crab. Humanely dispatch if live, then clean and cut into pieces (halved or quartered).",
            "Make the chilli paste: Blend shallots, garlic, chillies, and ginger into a smooth paste.",
            "Sauté the aromatics: Heat a wok over medium. Stir-fry the chilli paste and lemongrass for 2–3 minutes.",
            "Add tomato paste and stir for another minute.",
            "Simmer: Pour in the chicken broth and bring to a simmer.",
            "Cook the crab: Add crab pieces. Cover and cook for 8–10 minutes until bright orange and cooked through.",
            "Add egg whites: Whisk lightly and drizzle into sauce while stirring to create ribbons.",
            "Thicken: Mix cornstarch with water and add to the sauce, stirring until slightly thickened.",
            "Season: Stir in soy sauce, rice vinegar, sugar substitute, and adjust to taste.",
            "Finish with lime juice.",
            "Steam bao buns as per package instructions.",
            "Garnish crab with fresh coriander and serve with bao buns."
          ],
          nutrition: {
            calories: "1000",
            protein: "120g",
            fat: "30g",
            carbohydrates: "40g"
          },
          tips: [
            "Add a small amount of dried shrimp paste (belacan) for depth, but watch the sodium.",
            "Use more egg whites for a thicker, silkier sauce.",
            "Add bird’s eye chillies to the paste for a hotter version."
          ],
          relatedRecipes: [
                  {
                    title: "Korean Fried Chicken Burgers with Kimchi Slaw",
                    image: KoreanFriedChickenBurgersWithKimchiSlaw,
                    slug: "korean-fried-chicken-burgers"
                  },
                  {
                    title: "Spicy Lamb Keema Pau with Fried Egg",
                    image: SpicyLambKeemaPauWithFriedEgg,
                    slug: "spicy-lamb-keema-pau"
                  }
          ]
        },
        {
          title: "Korean Fried Chicken Burgers with Kimchi Slaw",
          slug: "korean-fried-chicken-burgers",
          time: "55 minutes",
          difficulty: "Medium",
          image: KoreanFriedChickenBurgersWithKimchiSlaw, // Use a relevant image
          description: "Indulge in crispy, double-fried chicken fillets coated in a sweet and spicy Korean sauce, nestled in toasted buns with a refreshing and tangy kimchi slaw. A perfect fusion of Korean flavors and classic burger comfort.",
          prepTime: "15 minutes",
          cookTime: "30 minutes",
          totalTime: "55 minutes",
          servings: 4,
          ingredients: [
            // Chicken
            "4 Chicken Thighs",
            "1 cup All-Purpose Flour",
            "1/2 cup Cornstarch",
            "1 tsp Salt",
            "1/2 tsp Black Pepper",
            "2 Eggs",
            "1 1/2 cups Panko Breadcrumbs",
            "Vegetable Oil (for frying)",
            // Korean Sauce
            "3 tbsp Gochujang (Korean Chili Paste)",
            "2 tbsp Soy Sauce",
            "1 tbsp Rice Vinegar",
            "2 tbsp Honey",
            "2 cloves Garlic (minced)",
            "1 tsp Ginger (grated)",
            // Kimchi Slaw
            "1/2 cup Mayonnaise",
            "1 cup Kimchi (chopped)",
            "2 tbsp Green Onions (thinly sliced)",
            "1 tsp Sesame Oil",
            // Assembly
            "4 Burger Buns",
            "Sesame Seeds (for garnish)"
          ],
          instructions: [
            "Prep Coating Stations: Bowl 1: Flour, cornstarch, salt, pepper. Bowl 2: Whisked eggs. Bowl 3: Panko breadcrumbs.",
            "Dredge chicken thighs in flour, dip in egg, coat in panko.",
            "Heat oil to 325°F (160°C). Fry chicken 6–8 minutes per side until lightly golden and cooked. Drain on rack.",
            "In a saucepan: gochujang, soy sauce, vinegar, honey, garlic, and ginger. Simmer for 2–3 minutes. Set aside.",
            "Heat oil to 375°F (190°C). Fry chicken again for 2–3 minutes per side until extra crispy.",
            "Toss Chicken in Sauce immediately after frying.",
            "Mix mayo, chopped kimchi, green onions, and sesame oil for the slaw.",
            "Toast buns. Assemble: Add slaw, chicken, more slaw, sesame seeds, and top bun.",
            "Serve Hot and enjoy immediately!"
          ],
          nutrition: {
            calories: "750",
            protein: "45g",
            fat: "40g",
            carbohydrates: "50g"
          },
          tips: [
            "Adjust gochujang for more heat or add chili flakes.",
            "Try potato or pretzel buns for a unique twist.",
            "Add provolone or mozzarella cheese slices before topping."
          ],
          relatedRecipes: [
                  {
                    title: "Low-Fat Singapore Chilli Crab with Bao Buns",
                    image: ChilliCrabWithBaoBuns,
                    slug: "low-fat-singapore-chilli-crab"
                  },
                  {
                    title: "Spicy Lamb Keema Pau with Fried Egg",
                    image: SpicyLambKeemaPauWithFriedEgg,
                    slug: "spicy-lamb-keema-pau"
                  }
          ]
        },
        {
          title: "Spicy Lamb Keema Pau with Fried Egg",
          slug: "spicy-lamb-keema-pau",
          time: "Approximately 45 minutes - 1 hour",
          difficulty: "Medium",
          image: SpicyLambKeemaPauWithFriedEgg, // Use a relevant image
          description: "A popular Indian street food, Keema Pau features spiced lamb mince served in a buttered bun, often topped with a fried egg.",
          prepTime: "20 minutes",
          cookTime: "30 minutes",
          totalTime: "Approximately 45 minutes - 1 hour",
          servings: 4,
          ingredients: [
            "Lamb mince",
            "Onion",
            "Garlic",
            "Ginger",
            "Green chilies",
            "Tomatoes",
            "Curry powder",
            "Tomato puree",
            "Mango chutney",
            "Cumin seeds",
            "Roti breads or burger buns",
            "Eggs",
            "Coriander",
            "Oil",
            "Spices (turmeric powder, red chili powder, garam masala, etc.)",
            "Yogurt (optional)",
            "Lemon juice",
            "Coconut milk (optional)"
          ],
          instructions: [
            "Heat oil in a pan and add cumin seeds.",
            "Add chopped onion, ginger, and garlic, and cook until golden brown.",
            "Add lamb mince and cook, breaking it up with a spoon, until browned.",
            "Stir in chopped tomatoes, spices, and salt. Cook until the meat is fully cooked.",
            "Add tomato puree, curry powder, and mango chutney. Simmer until the sauce thickens.",
            "In a separate pan, fry eggs to your liking.",
            "Butter the buns and toast them.",
            "Fill the buns with the keema and top with a fried egg and fresh coriander."
          ],
          nutrition: {
            calories: "571",
            protein: "37g",
            fat: "32g",
            carbohydrates: "38g"
          },
          tips: [
            "Adjust the amount of chili to your preferred spice level.",
            "Add a squeeze of lemon juice for extra flavor.",
            "Serve with pickled onions for a tangy contrast."
          ],
          relatedRecipes: [
                  {
                    title: "Low-Fat Singapore Chilli Crab with Bao Buns",
                    image: ChilliCrabWithBaoBuns,
                    slug: "low-fat-singapore-chilli-crab"
                  },
                  {
                    title: "Korean Fried Chicken Burgers with Kimchi Slaw",
                    image: KoreanFriedChickenBurgersWithKimchiSlaw,
                    slug: "korean-fried-chicken-burgers"
                  } 
          ]
        }
      ]
    }
  ]