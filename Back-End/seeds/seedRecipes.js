
const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust path if necessary
const Recipe = require('../models/Recipe'); // Adjust path if necessary
const Chef = require('../models/Chef'); // Adjust path if necessary

const recipes = [
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Quinoa Salad with Avocado and Black Beans',
    category: 'Salad',
    ingredients: ['Quinoa', 'Avocado', 'Black Beans', 'Corn', 'Cherry Tomatoes', 'Lime Juice', 'Cilantro'],
    instructions: [
      'Cook quinoa according to package instructions.',
      'Mix with diced avocado, black beans, corn, chopped tomatoes, and cilantro.',
      'Dress with lime juice and salt.'
    ],
    cookingTime: 15,
    cuisine: 'Mexican',
    dietaryRestrictions: ['Gluten-Free'],
    categories: ['Salad'],
    photos: ['https://foolproofliving.com/wp-content/uploads/2021/05/Quinoa-black-bean-cilantro-salad.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 350,
      protein: 10,
      fat: 15,
      carbohydrates: 50,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Grilled Salmon with Lemon and Dill',
    category: 'Main Course',
    ingredients: ['Salmon Fillets', 'Lemon', 'Dill', 'Olive Oil', 'Garlic', 'Salt', 'Pepper'],
    instructions: [
      'Marinate salmon in olive oil, lemon juice, garlic, dill, salt, and pepper.',
      'Grill until cooked through.'
    ],
    cookingTime: 20,
    cuisine: 'American',
    dietaryRestrictions: ['Gluten-Free'],
    categories: ['Main Course'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlwlHIUIiNsmvhv_Zy9gLHlBOqgweoKZUlw&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 400,
      protein: 30,
      fat: 25,
      carbohydrates: 5
,
sugar: 2, // Added field
      fiber: 5     }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Chicken Stir-Fry with Vegetables',
    category: 'Stir-Fry',
    ingredients: ['Chicken Breast', 'Bell Peppers', 'Broccoli', 'Carrots', 'Snap Peas', 'Soy Sauce', 'Ginger', 'Garlic'],
    instructions: [
      'Stir-fry chicken and vegetables in a wok with ginger, garlic, and soy sauce.'
    ],
    cookingTime: 25,
    cuisine: 'Asian',
    dietaryRestrictions: ['Gluten-Free'],
    categories: ['Main Course'],
    photos: ['https://veenaazmanov.com/wp-content/uploads/2013/01/Chicken-Stir-Fry-wtih-Vegetables.jpeg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 300,
      protein: 25,
      fat: 10,
      carbohydrates: 30,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Sweet Potato and Black Bean Tacos',
    category: 'Tacos',
    ingredients: ['Sweet Potatoes', 'Black Beans', 'Taco Seasoning', 'Corn Tortillas', 'Avocado', 'Salsa'],
    instructions: [
      'Roast sweet potatoes.',
      'Mix with black beans and taco seasoning.',
      'Serve in tortillas with avocado and salsa.'
    ],
    cookingTime: 30,
    cuisine: 'Mexican',
    dietaryRestrictions: ['Vegetarian'],
    categories: ['Main Course'],
    photos: ['https://joyfoodsunshine.com/wp-content/uploads/2018/01/vegetarian-black-bean-sweet-potato-tacos-13.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 400,
      protein: 15,
      fat: 10,
      carbohydrates: 65,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Greek Yogurt Chicken Salad',
    category: 'Salad',
    ingredients: ['Chicken Breast', 'Greek Yogurt', 'Celery', 'Grapes', 'Walnuts', 'Dijon Mustard'],
    instructions: [
      'Shred cooked chicken.',
      'Mix with Greek yogurt, chopped celery, grapes, walnuts, and Dijon mustard.'
    ],
    cookingTime: 15,
    cuisine: 'American',
    dietaryRestrictions: ['Gluten-Free'],
    categories: ['Salad'],
    photos: ['https://foolproofliving.com/wp-content/uploads/2020/08/Greek-Yogurt-Chicken-Salad-recipe-image.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 350,
      protein: 30,
      fat: 12,
      carbohydrates: 20,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Spinach and Feta Stuffed Chicken Breast',
    category: 'Main Course',
    ingredients: ['Chicken Breasts', 'Spinach', 'Feta Cheese', 'Garlic', 'Olive Oil'],
    instructions: [
      'Stuff chicken breasts with spinach and feta.',
      'Bake until cooked.'
    ],
    cookingTime: 35,
    cuisine: 'Mediterranean',
    dietaryRestrictions: ['Gluten-Free'],
    categories: ['Main Course'],
    photos: ['https://recipes.net/wp-content/uploads/2023/05/spinach-and-feta-stuffed-chicken-breast-recipe_4330bdac2ffc4d9b193662adedd72d1a.jpeg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 400,
      protein: 35,
      fat: 20,
      carbohydrates: 10,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Chickpea and Spinach Curry',
    category: 'Curry',
    ingredients: ['Chickpeas', 'Spinach', 'Coconut Milk', 'Tomatoes', 'Onion', 'Curry Spices'],
    instructions: [
      'Sauté onions.',
      'Add spices, tomatoes, chickpeas, and coconut milk.',
      'Simmer with spinach.'
    ],
    cookingTime: 30,
    cuisine: 'Indian',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Main Course'],
    photos: ['https://www.budgetbytes.com/wp-content/uploads/2013/12/Curried-Cickpeas-with-Spinach-Finished.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 350,
      protein: 15,
      fat: 15,
      carbohydrates: 40,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Cauliflower Rice Stir-Fry',
    category: 'Stir-Fry',
    ingredients: ['Cauliflower', 'Bell Peppers', 'Peas', 'Carrots', 'Soy Sauce', 'Ginger', 'Garlic'],
    instructions: [
      'Pulse cauliflower into rice-sized pieces.',
      'Stir-fry with vegetables, ginger, and garlic.'
    ],
    cookingTime: 20,
    cuisine: 'Asian',
    dietaryRestrictions: ['Gluten-Free', 'Low-Carb'],
    categories: ['Main Course'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdg3_-LRdKCND13F3FyAbfJb65O31oM0RMQ&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 200,
      protein: 5,
      fat: 8,
      carbohydrates: 25,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Zucchini Noodles with Pesto',
    category: 'Pasta',
    ingredients: ['Zucchini', 'Basil Pesto', 'Cherry Tomatoes', 'Pine Nuts'],
    instructions: [
      'Spiralize zucchini into noodles.',
      'Toss with pesto, cherry tomatoes, and pine nuts.'
    ],
    cookingTime: 15,
    cuisine: 'Italian',
    dietaryRestrictions: ['Gluten-Free', 'Low-Carb'],
    categories: ['Main Course'],
    photos: ['https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2015/09/Pesto-Zucchini-Noodles-with-Chicken1-500x480.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 250,
      protein: 7,
      fat: 18,
      carbohydrates: 15,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Baked Turkey Meatballs',
    category: 'Main Course',
    ingredients: ['Ground Turkey', 'Breadcrumbs', 'Egg', 'Parsley', 'Garlic', 'Onion'],
    instructions: [
      'Mix ingredients, form meatballs.',
      'Bake until cooked through.'
    ],
    cookingTime: 30,
    cuisine: 'American',
    dietaryRestrictions: ['Gluten-Free'],
    categories: ['Main Course'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzf-_p19QOpou7O3jok3PvRRC6GTfeur1XnA&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 300,
      protein: 25,
      fat: 15,
      carbohydrates: 10,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Lentil Soup with Spinach',
    category: 'Soup',
    ingredients: ['Lentils', 'Spinach', 'Carrots', 'Onions', 'Garlic', 'Vegetable Broth'],
    instructions: [
      'Sauté onions and garlic.',
      'Add carrots, lentils, and broth.',
      'Simmer until lentils are tender, add spinach before serving.'
    ],
    cookingTime: 35,
    cuisine: 'American',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Soup'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYkY-sE8tPTe8A8rbhtqB7BZiEjOMEqfyNA&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 250,
      protein: 15,
      fat: 5,
      carbohydrates: 35,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Stuffed Bell Peppers',
    category: 'Main Course',
    ingredients: ['Bell Peppers', 'Quinoa', 'Black Beans', 'Corn', 'Tomato Sauce', 'Cheese'],
    instructions: [
      'Stuff peppers with a mixture of quinoa, beans, corn, and tomato sauce.',
      'Top with cheese and bake until peppers are tender.'
    ],
    cookingTime: 40,
    cuisine: 'Mexican',
    dietaryRestrictions: ['Vegetarian'],
    categories: ['Main Course'],
    photos: ['https://healthyfitnessmeals.com/wp-content/uploads/2020/03/instagram-In-Stream_Square___Vegetarian-stuffed-peppers-10.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 350,
      protein: 12,
      fat: 10,
      carbohydrates: 50,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Eggplant Parmesan',
    category: 'Main Course',
    ingredients: ['Eggplant', 'Tomato Sauce', 'Mozzarella Cheese', 'Parmesan Cheese', 'Basil'],
    instructions: [
      'Layer slices of breaded eggplant with tomato sauce and cheese.',
      'Bake until bubbly.'
    ],
    cookingTime: 45,
    cuisine: 'Italian',
    dietaryRestrictions: ['Vegetarian'],
    categories: ['Main Course'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFLeqx5r6c9ElKe-dH2U1UxyaPQTQFvAM6w&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 400,
      protein: 15,
      fat: 20,
      carbohydrates: 35,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Hummus and Veggie Wrap',
    category: 'Wrap',
    ingredients: ['Whole Wheat Tortilla', 'Hummus', 'Cucumber', 'Carrots', 'Bell Peppers'],
    instructions: [
      'Spread hummus on tortilla.',
      'Layer with sliced vegetables and roll up.'
    ],
    cookingTime: 10,
    cuisine: 'Mediterranean',
    dietaryRestrictions: ['Vegan'],
    categories: ['Snack'],
    photos: ['https://foodsharingvegan.com/wp-content/uploads/2022/08/Vegan-Hummus-Wrap-Plant-Based-on-a-Budget-1-3.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 250,
      protein: 10,
      fat: 8,
      carbohydrates: 30,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Berry Smoothie Bowl',
    category: 'Breakfast',
    ingredients: ['Mixed Berries', 'Greek Yogurt', 'Banana', 'Granola', 'Honey'],
    instructions: [
      'Blend berries, yogurt, and banana until smooth.',
      'Pour into a bowl and top with granola and honey.'
    ],
    cookingTime: 10,
    cuisine: 'American',
    dietaryRestrictions: ['Gluten-Free'],
    categories: ['Breakfast'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVsGa1nrh9PNkAHVuPGU9h3o6QjnayRYUbA&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 300,
      protein: 15,
      fat: 5,
      carbohydrates: 50,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Avocado Toast with Tomato and Basil',
    category: 'Breakfast',
    ingredients: ['Whole Grain Bread', 'Avocado', 'Tomato', 'Basil', 'Olive Oil'],
    instructions: [
      'Toast bread.',
      'Top with mashed avocado, sliced tomato, and basil.',
      'Drizzle with olive oil.'
    ],
    cookingTime: 10,
    cuisine: 'American',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Breakfast'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB9RZXbRNcdciWBtdqLM1M9O34eJe2ZuVHg&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 250,
      protein: 7,
      fat: 15,
      carbohydrates: 30,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Oven-Roasted Brussels Sprouts',
    category: 'Side Dish',
    ingredients: ['Brussels Sprouts', 'Olive Oil', 'Garlic', 'Salt', 'Pepper'],
    instructions: [
      'Toss Brussels sprouts with olive oil, garlic, salt, and pepper.',
      'Roast until crispy.'
    ],
    cookingTime: 25,
    cuisine: 'American',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Side Dish'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ur0nQEc6YPjNBobURKh68xCwWrSKda5Tqg&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 200,
      protein: 4,
      fat: 15,
      carbohydrates: 15,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Baked Sweet Potato Fries',
    category: 'Side Dish',
    ingredients: ['Sweet Potatoes', 'Olive Oil', 'Paprika', 'Garlic Powder', 'Salt', 'Pepper'],
    instructions: [
      'Cut sweet potatoes into fries.',
      'Toss with olive oil and spices.',
      'Bake until crispy.'
    ],
    cookingTime: 30,
    cuisine: 'American',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Side Dish'],
    photos: ['https://cdn.loveandlemons.com/wp-content/uploads/2024/01/sweet-potato-fries.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 250,
      protein: 2,
      fat: 10,
      carbohydrates: 40,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Chia Seed Pudding',
    category: 'Dessert',
    ingredients: ['Chia Seeds', 'Almond Milk', 'Maple Syrup', 'Vanilla Extract'],
    instructions: [
      'Mix chia seeds with almond milk, maple syrup, and vanilla.',
      'Let sit overnight in the fridge.'
    ],
    cookingTime: 10,
    cuisine: 'American',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Dessert'],
    photos: ['https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/01/Chia-Pudding-main.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 150,
      protein: 6,
      fat: 7,
      carbohydrates: 20,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Baked Falafel',
    category: 'Snack',
    ingredients: ['Chickpeas', 'Garlic', 'Cilantro', 'Cumin', 'Coriander', 'Baking Powder'],
    instructions: [
      'Blend ingredients into a paste.',
      'Form into balls and bake until golden.'
    ],
    cookingTime: 30,
    cuisine: 'Middle Eastern',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Snack'],
    photos: ['https://www.proportionalplate.com/wp-content/uploads/2021/01/Baked-Falafel-3.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 200,
      protein: 10,
      fat: 10,
      carbohydrates: 20,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Vegetable Soup',
    category: 'Soup',
    ingredients: ['Mixed Vegetables', 'Vegetable Broth', 'Tomatoes', 'Garlic', 'Onions'],
    instructions: [
      'Sauté onions and garlic.',
      'Add vegetables and broth.',
      'Simmer until vegetables are tender.'
    ],
    cookingTime: 30,
    cuisine: 'American',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Soup'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQH49waX_-KXhT09Z5dF19nv292n22KbwZQ&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 150,
      protein: 5,
      fat: 3,
      carbohydrates: 25,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Stuffed Portobello Mushrooms',
    category: 'Appetizer',
    ingredients: ['Portobello Mushrooms', 'Spinach', 'Feta Cheese', 'Garlic', 'Olive Oil'],
    instructions: [
      'Stuff mushrooms with a mixture of spinach, feta, and garlic.',
      'Bake until tender.'
    ],
    cookingTime: 25,
    cuisine: 'Mediterranean',
    dietaryRestrictions: ['Vegetarian'],
    categories: ['Appetizer'],
    photos: ['https://www.eatwell101.com/wp-content/uploads/2017/06/Garlic-Herb-Butter-Stuffed-Portobello-Mushrooms-Recipe.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 200,
      protein: 10,
      fat: 12,
      carbohydrates: 10,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Quinoa Salad with Avocado and Black Beans',
    category: 'Salad',
    ingredients: ['Quinoa', 'Avocado', 'Black Beans', 'Corn', 'Cherry Tomatoes', 'Lime Dressing'],
    instructions: [
      'Mix quinoa, avocado, beans, corn, and tomatoes.',
      'Toss with lime dressing.'
    ],
    cookingTime: 15,
    cuisine: 'American',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Salad'],
    photos: ['https://www.feastingathome.com/wp-content/uploads/2021/07/Black-Bean-Quinoa-Salad_-3.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 350,
      protein: 12,
      fat: 15,
      carbohydrates: 40,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Greek Yogurt Parfait',
    category: 'Breakfast',
    ingredients: ['Greek Yogurt', 'Granola', 'Fresh Berries', 'Honey'],
    instructions: [
      'Layer yogurt, granola, and berries in a bowl.',
      'Drizzle with honey.'
    ],
    cookingTime: 5,
    cuisine: 'Greek',
    dietaryRestrictions: ['Gluten-Free'],
    categories: ['Breakfast'],
    photos: ['https://simplyhomecooked.com/wp-content/uploads/2021/08/yogurt-parfait-4.jpg'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 300,
      protein: 15,
      fat: 8,
      carbohydrates: 35,
      sugar: 2, // Added field
      fiber: 5 
    }
  },
  {
    chefId: null, // Placeholder to be replaced with actual chefId
    name: 'Mango Chia Pudding',
    category: 'Dessert',
    ingredients: ['Chia Seeds', 'Mango', 'Coconut Milk', 'Maple Syrup'],
    instructions: [
      'Blend mango with coconut milk.',
      'Mix with chia seeds and maple syrup.',
      'Let sit overnight in the fridge.'
    ],
    cookingTime: 10,
    cuisine: 'American',
    dietaryRestrictions: ['Vegan', 'Gluten-Free'],
    categories: ['Dessert'],
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANei8RURj1gKhDBPTr61D0aPuLZ2fQ6PvbA&s'],
    ratings: [],
    reviews: [],
    reports: [],
    nutrition: {
      calories: 200,
      protein: 5,
      fat: 8,
      carbohydrates: 30,
      sugar: 2, // Added field
      fiber: 5 
    }
  }
];

const seedRecipes = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log('Database connection established');

    // Fetch chefs from the database
    const chefs = await Chef.find();
    if (chefs.length === 0) {
      console.log('No chefs found. Please add some chefs to the database first.');
      return;
    }

    // Assign chefIds to recipes
    recipes.forEach((recipe, index) => {
      // Assign a chefId to each recipe, cycling through available chefs
      recipe.chefId = chefs[index % chefs.length]._id;
    });

    // Clear existing recipes
    await Recipe.deleteMany({}); 

    // Insert new recipes
    const docs = await Recipe.insertMany(recipes);
    console.log('Recipes inserted:', docs);

    await mongoose.connection.close(); // Close connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close(); // Close connection on error
  }
};

seedRecipes();
