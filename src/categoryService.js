function getCategoryPaths(category, parentPath = "") {
  const currentPath = parentPath
    ? `${parentPath}/${category.name}`
    : category.name;

  // Si no tiene subcategorías, es una hoja
  if (!category.subcategories || category.subcategories.length === 0) {
    return [currentPath];
  }

  // Si tiene hijos, recorremos cada uno
  return category.subcategories.flatMap(subcategory =>
    getCategoryPaths(subcategory, currentPath)
  );
}
function findCategoryById(category, targetId) {
  if (category.id === targetId) {
    return category;
  }

  for (const subcategory of category.subcategories || []) {
    const found = findCategoryById(subcategory, targetId);
    if (found) {
      return found;
    }
  }

  return null;
}
module.exports = {
  getCategoryPaths,
  findCategoryById
};
