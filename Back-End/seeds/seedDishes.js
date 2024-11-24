const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Adjust the path to your database connection file

const Dish = require('../models/Dish'); // Adjust the path to your Dish model
const Chef = require('../models/Chef'); // Adjust the path to your Chef model

// Sample data for 20 healthy food dishes with nutritional information
const dishes = [
  {
    chefId: null,
    category: 'Salad',
    name: 'Quinoa Salad with Avocado',
    description: 'A nutritious salad with quinoa, avocado, cherry tomatoes, and a lemon vinaigrette.',
    price: 10.99,
    photos: ['https://images.immediate.co.uk/production/volatile/sites/30/2020/08/california-quinoa-avocado-salad-820b6ba.jpg'],
    availableQuantity: 25,
    nutrition: {
      calories: 350,
      protein: 10,
      fat: 15,
      carbohydrates: 45
    }
  },
  {
    chefId: null,
    category: 'Smoothie',
    name: 'Green Detox Smoothie',
    description: 'A healthy blend of spinach, kale, green apple, and chia seeds.',
    price: 7.99,
    photos: ['https://www.wholesomeyum.com/wp-content/uploads/2022/11/wholesomeyum-Green-Detox-Smoothie-8.jpg'],
    availableQuantity: 30,
    nutrition: {
      calories: 200,
      protein: 5,
      fat: 2,
      carbohydrates: 40
    }
  },
  {
    chefId: null,
    category: 'Main Course',
    name: 'Grilled Chicken Breast with Vegetables',
    description: 'Lean grilled chicken served with steamed broccoli, carrots, and zucchini.',
    price: 14.99,
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxntafV97WEgnTttHZdKYuysJpx_j0bXZFzw&s'],
    availableQuantity: 20,
    nutrition: {
      calories: 400,
      protein: 35,
      fat: 10,
      carbohydrates: 30
    }
  },
  {
    chefId: null,
    category: 'Soup',
    name: 'Lentil Soup',
    description: 'Hearty lentil soup with carrots, celery, and spices.',
    price: 8.99,
    photos: ['https://www.feastingathome.com/wp-content/uploads/2024/01/Red-lentil-Soup-Recipe-11.jpg'],
    availableQuantity: 40,
    nutrition: {
      calories: 250,
      protein: 12,
      fat: 4,
      carbohydrates: 40
    }
  },
  {
    chefId: null,
    category: 'Snack',
    name: 'Greek Yogurt with Berries and Honey',
    description: 'Creamy Greek yogurt topped with fresh berries and a drizzle of honey.',
    price: 6.99,
    photos: ['https://www.thekitchenmagpie.com/wp-content/uploads/images/2011/04/greekyogurtandberries1.jpg'],
    availableQuantity: 50,
    nutrition: {
      calories: 180,
      protein: 10,
      fat: 4,
      carbohydrates: 25
    }
  },
  {
    chefId: null,
    category: 'Salad',
    name: 'Chickpea and Cucumber Salad',
    description: 'A refreshing salad with chickpeas, cucumbers, red onion, and a lemon-tahini dressing.',
    price: 9.49,
    photos: ['https://www.bowlofdelicious.com/wp-content/uploads/2020/04/chickpea-salad-square-500x375.jpg'],
    availableQuantity: 30,
    nutrition: {
      calories: 280,
      protein: 12,
      fat: 8,
      carbohydrates: 40
    }
  },
  {
    chefId: null,
    category: 'Smoothie',
    name: 'Berry Spinach Smoothie',
    description: 'A delicious blend of mixed berries, spinach, banana, and almond milk.',
    price: 8.49,
    photos: ['https://simplegreensmoothies.com/wp-content/uploads/blueberry-spinach-smoothie-healthy-recipe-4.jpg'],
    availableQuantity: 25,
    nutrition: {
      calories: 220,
      protein: 5,
      fat: 3,
      carbohydrates: 45
    }
  },
  {
    chefId: null,
    category: 'Main Course',
    name: 'Baked Salmon with Asparagus',
    description: 'Oven-baked salmon fillet with a side of roasted asparagus.',
    price: 16.99,
    photos: ['https://playswellwithbutter.com/wp-content/uploads/2023/04/Sheet-Pan-Salmon-and-Asparagus-with-Crispy-Smashed-Potatoes-13.jpg'],
    availableQuantity: 20,
    nutrition: {
      calories: 400,
      protein: 35,
      fat: 22,
      carbohydrates: 15
    }
  },
  {
    chefId: null,
    category: 'Soup',
    name: 'Sweet Potato and Black Bean Soup',
    description: 'A hearty soup made with sweet potatoes, black beans, tomatoes, and spices.',
    price: 9.49,
    photos: ['https://nibbleanddine.com/wp-content/uploads/2021/10/sweet-potato-black-bean-soup-SM.jpg'],
    availableQuantity: 35,
    nutrition: {
      calories: 300,
      protein: 10,
      fat: 6,
      carbohydrates: 50
    }
  },
  {
    chefId: null,
    category: 'Snack',
    name: 'Hummus with Carrot Sticks',
    description: 'Creamy hummus served with crunchy carrot sticks for dipping.',
    price: 5.99,
    photos: ['https://www.rootsandradishes.com/wp-content/uploads/2022/05/hummus-and-veggie-jars-2.jpg'],
    availableQuantity: 45,
    nutrition: {
      calories: 250,
      protein: 8,
      fat: 12,
      carbohydrates: 30
    }
  },
  {
    chefId: null,
    category: 'Salad',
    name: 'Kale Salad with Lemon Vinaigrette',
    description: 'A fresh kale salad with lemon vinaigrette, almonds, and shredded carrots.',
    price: 11.49,
    photos: ['https://www.jessicagavin.com/wp-content/uploads/2021/03/lemon-kale-salad-13-1200.jpg'],
    availableQuantity: 30,
    nutrition: {
      calories: 280,
      protein: 8,
      fat: 12,
      carbohydrates: 30
    }
  },
  {
    chefId: null,
    category: 'Smoothie',
    name: 'Mango and Pineapple Smoothie',
    description: 'A tropical smoothie with mango, pineapple, and coconut water.',
    price: 7.99,
    photos: ['https://realhousemoms.com/wp-content/uploads/Mango-Pineapple-Smoothie-RECIPE-CARD.jpg'],
    availableQuantity: 30,
    nutrition: {
      calories: 220,
      protein: 2,
      fat: 1,
      carbohydrates: 50
    }
  },
  {
    chefId: null,
    category: 'Main Course',
    name: 'Stuffed Bell Peppers',
    description: 'Bell peppers stuffed with quinoa, black beans, corn, and spices.',
    price: 12.99,
    photos: ['https://thecozycook.com/wp-content/uploads/2022/08/Stuffed-Bell-Peppers-f.jpg'],
    availableQuantity: 25,
    nutrition: {
      calories: 320,
      protein: 15,
      fat: 8,
      carbohydrates: 50
    }
  },
  {
    chefId: null,
    category: 'Soup',
    name: 'Tomato Basil Soup',
    description: 'A classic tomato soup with fresh basil and a touch of cream.',
    price: 8.49,
    photos: ['https://www.allrecipes.com/thmb/-qNhTFemY_EY4zDIJMRmb6mHOL8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13113-rich-and-creamy-tomato-basil-soup-DDMFS-4x3-e7bc78ff4c6b4f999f9e178d97466e6f.jpg'],
    availableQuantity: 40,
    nutrition: {
      calories: 180,
      protein: 4,
      fat: 7,
      carbohydrates: 25
    }
  },
  {
    chefId: null,
    category: 'Snack',
    name: 'Apple Slices with Almond Butter',
    description: 'Crisp apple slices served with a side of almond butter for dipping.',
    price: 6.49,
    photos: ['https://peapilpublishing.com/cdn/shop/articles/Apple_Slices_with_Almond_Butter.jpg?v=1674858298'],
    availableQuantity: 40,
    nutrition: {
      calories: 200,
      protein: 4,
      fat: 10,
      carbohydrates: 28
    }
  },
  {
    chefId: null,
    category: 'Salad',
    name: 'Spinach and Strawberry Salad',
    description: 'A light salad with fresh spinach, strawberries, walnuts, and a balsamic vinaigrette.',
    price: 9.99,
    photos: ['https://www.allrecipes.com/thmb/hI5hYn1sJB2mJar0h0lechfe1PU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-14276-Strawberry-Spinach-Salad-4x3-135a121dc0b24ad693289e221dcd3477.jpg'],
    availableQuantity: 25,
    nutrition: {
      calories: 250,
      protein: 5,
      fat: 12,
      carbohydrates: 30
    }
  },
  {
    chefId: null,
    category: 'Smoothie',
    name: 'Chia Seed Pudding Smoothie',
    description: 'A creamy smoothie made with chia seeds, almond milk, and a touch of vanilla.',
    price: 8.49,
    photos: ['https://images.squarespace-cdn.com/content/v1/53f77a3fe4b04c9b7cef3089/a3e45964-efbc-4158-baf0-7d3b56d45478/Chia-Pudding-Smoothie.jpg'],
    availableQuantity: 20,
    nutrition: {
      calories: 210,
      protein: 6,
      fat: 7,
      carbohydrates: 30
    }
  },
  {
    chefId: null,
    category: 'Main Course',
    name: 'Sweet Potato and Black Bean Tacos',
    description: 'Tacos filled with roasted sweet potatoes, black beans, avocado, and salsa.',
    price: 11.99,
    photos: ['https://www.eatingwell.com/thmb/DTva0yAWTc2hW3q1jp_XnoBNskA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sweet-potato-black-bean-tacos-63cda3afd6324c5395a547c28bb3da1e.jpg'],
    availableQuantity: 30,
    nutrition: {
      calories: 350,
      protein: 12,
      fat: 9,
      carbohydrates: 55
    }
  },
  {
    chefId: null,
    category: 'Soup',
    name: 'Butternut Squash Soup',
    description: 'A creamy butternut squash soup with a hint of ginger and nutmeg.',
    price: 9.99,
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbR1vArwDlBaWVLtKKWc8Pp_UbmevkUPCBg&s'],
    availableQuantity: 35,
    nutrition: {
      calories: 220,
      protein: 3,
      fat: 5,
      carbohydrates: 40
    }
  },
  {
    chefId: null,
    category: 'Snack',
    name: 'Roasted Chickpeas',
    description: 'Crunchy roasted chickpeas seasoned with your choice of spices.',
    price: 5.49,
    photos: ['https://www.allrecipes.com/thmb/WdQzwYsrWX0-6zRprlfn7OitWN8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/81548-roasted-chickpeas-ddmfs-0442-1x2-hero-295c03efec90435a8588848f7e50f0bf.jpg'],
    availableQuantity: 50,
    nutrition: {
      calories: 180,
      protein: 8,
      fat: 6,
      carbohydrates: 25
    }
  },
  {
    chefId: null,
    category: 'Salad',
    name: 'Mediterranean Quinoa Salad',
    description: 'A vibrant salad with quinoa, olives, feta cheese, and a lemon-herb dressing.',
    price: 10.49,
    photos: ['https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad-500x500.jpg'],
    availableQuantity: 30,
    nutrition: {
      calories: 290,
      protein: 11,
      fat: 12,
      carbohydrates: 40
    }
  },
  {
    chefId: null,
    category: 'Smoothie',
    name: 'Peach and Mango Smoothie',
    description: 'A refreshing smoothie made with peaches, mangoes, and coconut milk.',
    price: 7.49,
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVP4GQ3fJc6NpCc45SYWsnsV9jj6zU8fieg&s'],
    availableQuantity: 25,
    nutrition: {
      calories: 210,
      protein: 2,
      fat: 1,
      carbohydrates: 50
    }
  },
  {
    chefId: null,
    category: 'Main Course',
    name: 'Cauliflower Rice Stir-Fry',
    description: 'Stir-fried cauliflower rice with mixed vegetables and tofu.',
    price: 12.49,
    photos: ['https://minimalistbaker.com/wp-content/uploads/2017/10/Cauliflower-Stir-Fry-SQUARE.jpg'],
    availableQuantity: 20,
    nutrition: {
      calories: 300,
      protein: 15,
      fat: 8,
      carbohydrates: 35
    }
  }
];


const seedDishes = async () => {
  try {
    await connectDB(); // Connect to the database
    console.log('Database connection established');

    await Dish.deleteMany({}); // Clear existing dishes
    console.log('Cleared existing dishes');

    // Get chef IDs
    const chefs = await Chef.find();
    if (chefs.length < 3) {
      throw new Error('Not enough chefs found in the database');
    }

    const chefIds = chefs.map(chef => chef._id);

    // Randomly assign dishes to chefs
    dishes.forEach(dish => {
      // Randomly assign a chefId to each dish
      dish.chefId = chefIds[Math.floor(Math.random() * chefIds.length)];
    });

    // Create dishes
    const docs = await Dish.insertMany(dishes);
    console.log('Sample dishes inserted:', docs);

    await mongoose.connection.close(); // Close connection after seeding
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    await mongoose.connection.close(); // Close connection on error
  }
};

seedDishes();