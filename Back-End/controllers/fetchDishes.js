const Dish=require('../models/Dish');

const fetchDishes = async (req,res) => { //do not forget res and req 
    const { id } = req.params;
    try {
     
       
    const dishes = await Dish.find({chefId:id}); //here must two name not the same name 
    console.log('Dishes found:',dishes);
    res.json(dishes); //res.json here in front res.data and do not forget to make state as array to use map

    } catch (error) {
      console.error('Error finding dishes:', error);
      res.status(500).json({ error: 'Error finding dishes' });
    }
  };

 

 
  module.exports = {fetchDishes};
