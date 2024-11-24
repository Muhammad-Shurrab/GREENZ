const Chef = require("../models/Chef");

const fetchChefs = async (req, res) => {
  //do not forget res and req
  try {
    const chefs = await Chef.find(); //here must two name not the same name
    res.json(chefs); //res.json here in front res.data and do not forget to make state as array to use map
  } catch (error) {
    console.error("Error finding chefs :", error);
    res.status(500).json({ error: "Error finding chefs " });
  }
};

module.exports = { fetchChefs };
