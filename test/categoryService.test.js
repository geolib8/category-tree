const categories = require("../src/data");
const {
  getCategoryPaths,
  findCategoryById,
  findCategoryByIdIterative
} = require("../src/categoryService");

describe("Category Service", () => {

  describe("getCategoryPaths", () => {

    test("should return all category paths", () => {
      const result = getCategoryPaths(categories);

      expect(result).toEqual([
        "Electrónica/Computadoras/Laptops",
        "Electrónica/Computadoras/Desktops",
        "Electrónica/Celulares",
        "Electrónica/Accesorios"
      ]);
    });

    test("should return empty array for invalid structure", () => {
      expect(() => getCategoryPaths(null)).toThrow();
    });

  });

  describe("findCategoryById", () => {

    test("should find category at deep level", () => {
      const result = findCategoryById(categories, 6);

      expect(result).toEqual({
        id: 6,
        name: "Desktops",
        subcategories: []
      });
    });

    test("should return null if category does not exist", () => {
      const result = findCategoryById(categories, 999);
      expect(result).toBeNull();
    });

    test("should find root category", () => {
      const result = findCategoryById(categories, 1);
      expect(result.name).toBe("Electrónica");
    });

  });

  describe("findCategoryByIdIterative", () => {

    test("should find category using iterative approach", () => {
      const result = findCategoryByIdIterative(categories, 5);
      expect(result.name).toBe("Laptops");
    });

  });

});
