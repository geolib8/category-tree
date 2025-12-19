const categories = require("./data");
const {
  getCategoryPaths,
  findCategoryById
} = require("./categoryService");

console.log("Rutas completas:");
console.log(getCategoryPaths(categories));

console.log("\nBuscar ID 6:");
console.log(findCategoryById(categories, 2));


//EXTRA API-like functionality demonstration
console.log("Buscar ID inexistente (999):");
console.log(findCategoryById(categories, 999));
function handleRequest({ action, payload }) {
  switch (action) {
    case "GET_PATHS":
      return getCategoryPaths(payload);

    case "FIND_BY_ID":
      return findCategoryById(payload.category, payload.id);

    default:
      throw new Error("Unknown action");
  }
}

// Simulated API calls
console.log("\n[API] GET_PATHS");
console.log(
  handleRequest({
    action: "GET_PATHS",
    payload: categories
  })
);

console.log("\n[API] FIND_BY_ID");
console.log(
  handleRequest({
    action: "FIND_BY_ID",
    payload: { category: categories, id: 6 }
  })
);

console.log(getCategoryPaths(categories, { separator: " > " }));
