const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Recipe.create({
  title: "Solano ceviche",
  level: "Amateur Chef",
  ingredients: ["fish", "lime", "salt"],
  cuisine: "peruvian",
  dishType: "Dish",
  image: "https://images.media-allrecipes.com/images/75131.jpg",
  duration: 30,
  creator: "Kenneth",
  function(err, Recipe) {
    if (err) {
      console.log("An error happened:", err);
    } else {
      console.log("The user is saved and its value is: ", Recipe);
    }
  }
});


Recipe.insertMany(data)

Recipe.updateOne({ title: "Rigatoni alla Genovese"}, { duration: 100 })
  .then(console.log("success"))
  .catch(console.log("Error"));

  Recipe.deleteOne({ title: "Carrot Cake"})
  .then(console.log("success"))
  .catch(console.log("Error"));