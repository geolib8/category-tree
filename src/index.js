const categories = require("./data");
const {
  getCategoryPaths,
  findCategoryById
} = require("./categoryService");

console.log("Rutas completas:");
console.log(getCategoryPaths(categories));

console.log("\nBuscar ID 6:");
console.log(findCategoryById(categories, 2));
