import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Users, Leaf } from 'lucide-react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const OurStory = () => {
  return (
    <div className="bg-gray-50">
      <NavBar />
      {/* Hero Section */}
      <section className="relative bg-green text-white py-24 mt-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our GREENZ Journey
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From a small kitchen to a nationwide healthy eating movement, discover how GREENZ is revolutionizing the way people think about food.
          </motion.p>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2">
          <img
            src="https://plantbasedjess.com/wp-content/uploads/2022/05/IMG_3489-1.jpg"
            alt="Healthy salad bowl"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/webp/public/2022-10/flat-lay-batch-cooking-composition%20%281%29.jpg.webp?itok=boJ9bZZe"
                alt="GREENZ founders"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-green">Our Beginning</h2>
              <p className="text-gray-700 mb-4">
                GREENZ started in 2024 with five friends, Lisa and Mark, who shared a passion for healthy eating and sustainable living. Frustrated by the lack of convenient, truly nutritious meal options, they decided to take matters into their own hands.
              </p>
              <p className="text-gray-700">
                What began as meal prep sessions for friends quickly grew into a local sensation. People loved the fresh, flavorful dishes that made healthy eating both easy and enjoyable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-green">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sprout, title: "Nourish", description: "Provide nutritious, delicious meals that fuel a healthy lifestyle." },
              { icon: Users, title: "Educate", description: "Empower people with knowledge about balanced nutrition and cooking skills." },
              { icon: Leaf, title: "Sustain", description: "Promote environmentally friendly practices in food production and packaging." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <item.icon className="w-16 h-16 mx-auto mb-4 text-yellow" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth and Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-green">Our Growth & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", description: "Healthy Recipes" },
              { number: "1M+", description: "Meals Delivered" },
              { number: "100k+", description: "Active Subscribers" },
              { number: "50+", description: "Cities Served" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-4xl font-bold text-green mb-2">{item.number}</p>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="bg-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6 text-yellow"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Looking Ahead
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              As we continue to grow, our commitment to health, sustainability, and community remains stronger than ever. We're excited to expand our reach, innovate our offerings, and inspire more people to embrace the power of nutritious, delicious food.
            </motion.p>
            <button className="bg-white text-green px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-100 transition duration-300">
              Join Our Journey
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default OurStory;
