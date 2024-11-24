import React from 'react';
import Hero from './Hero';
import FeaturedRecipes from './FeaturedRecipes';
import PopularDishes from './PopularDishes';
import RecipeCategories from './RecipeCategories';
import ChefSpotlight from './ChefSpotlight';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/NavBar';

const Home = () => {
  // Mock data for demonstration purposes
  const recipes = [
    {
      id: 1,
      title: "Quinoa Salad with Avocado",
      description: "A nutritious quinoa salad packed with avocado, cherry tomatoes, cucumber, and a lemon vinaigrette.",
      image: "https://example.com/images/quinoa-salad.jpg",
    },
    {
      id: 2,
      title: "Grilled Chicken with Veggies",
      description: "Juicy grilled chicken served with a medley of roasted vegetables, including bell peppers, zucchini, and asparagus.",
      image: "https://example.com/images/grilled-chicken.jpg",
    },
    {
      id: 3,
      title: "Berry Smoothie Bowl",
      description: "A refreshing smoothie bowl made with mixed berries, almond milk, and topped with granola and fresh fruit.",
      image: "https://example.com/images/smoothie-bowl.jpg",
    },
  ];
  
  const dishes = [
    {
      id: 1,
      name: "Vegan Buddha Bowl",
      chef: "Chef Sarah Johnson",
      price: 12.99,
      image: "https://example.com/images/buddha-bowl.jpg",
    },
    {
      id: 2,
      name: "Gluten-Free Veggie Pizza",
      chef: "Chef Mark Daniels",
      price: 15.99,
      image: "https://example.com/images/veggie-pizza.jpg",
    },
    {
      id: 3,
      name: "Grilled Salmon with Quinoa",
      chef: "Chef Emily Brown",
      price: 18.99,
      image: "https://example.com/images/salmon-quinoa.jpg",
    },
  ];
  
  // const categories = [
  //   {
  //     id: 1,
  //     name: "Low-Carb",
  //     image: "https://example.com/images/low-carb.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Vegan",
  //     image: "https://example.com/images/vegan.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Gluten-Free",
  //     image: "https://example.com/images/gluten-free.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Keto",
  //     image: "https://example.com/images/keto.jpg",
  //   },
  // ];
  
  
  const chefs = [
    {
      id: 1,
      name: "Chef Sarah Johnson",
      specialty: "Vegan Cuisine",
      image: "https://example.com/images/chef-sarah.jpg",
    },
    {
      id: 2,
      name: "Chef Mark Daniels",
      specialty: "Gluten-Free Dishes",
      image: "https://example.com/images/chef-mark.jpg",
    },
    {
      id: 3,
      name: "Chef Emily Brown",
      specialty: "Low-Carb Meals",
      image: "https://example.com/images/chef-emily.jpg",
    },
  ];
  
  const testimonials = [
    {
      id: 1,
      text: "The vegan buddha bowl was incredibly fresh and delicious. I will definitely order it again!",
      userName: "Alice Morgan",
      userTitle: "Health Enthusiast",
      userImage: "https://example.com/images/user-alice.jpg",
    },
    {
      id: 2,
      text: "I love the gluten-free veggie pizza! It's so tasty, and I feel great after eating it.",
      userName: "John Smith",
      userTitle: "Fitness Coach",
      userImage: "https://example.com/images/user-john.jpg",
    },
    {
      id: 3,
      text: "The grilled salmon with quinoa is my new favorite meal. It's healthy and filling!",
      userName: "Linda White",
      userTitle: "Yoga Instructor",
      userImage: "https://example.com/images/user-linda.jpg",
    },
  ];
  

  return (
    <div>
        <Navbar/>
      <Hero />
      {/* <FeaturedRecipes recipes={recipes} />
      <PopularDishes dishes={dishes} />
      <RecipeCategories categories={categories} />
      <ChefSpotlight chefs={chefs} />
      <Testimonials testimonials={testimonials} />
      <CallToAction /> */}
      <FeaturedRecipes recipes={recipes} />
<RecipeCategories  />
<PopularDishes  />
<ChefSpotlight  />
<Testimonials testimonials={testimonials} />
<CallToAction />
      <Footer />
    </div>
  );
}

export default Home;
