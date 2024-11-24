const express = require("express");
const router = express.Router();

const {fetchDishes} = require("../controllers/fetchDishes");
const { fetchChefs } = require("../controllers/fetchChefs");
 
 


router.get('/fetchDishes/:id', fetchDishes);
router.get("/fetchChefs", fetchChefs);
 

module.exports = router;

 