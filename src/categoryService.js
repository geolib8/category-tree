function getCategoryPaths(category, options = {}, parentPath = "", visited = new Set()) {
    
    const separator = options.separator ?? "/";
    if (visited.has(category.id)) {
        throw new Error("Circular reference detected");
    }

    visited.add(category.id);

    const currentPath = parentPath
        ? `${parentPath}${separator}${category.name}`
        : category.name;

    if (!category.subcategories || category.subcategories.length === 0) {
        return [currentPath];
    }

    return category.subcategories.flatMap(sub =>
        getCategoryPaths(sub, options, currentPath, visited)
    );
}

function findCategoryById(category, targetId) {
    validateCategory(category);
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

function findCategoryByIdIterative(root, targetId) {
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();

        if (current.id === targetId) {
        return current;
        }

        if (current.subcategories) {
        stack.push(...current.subcategories);
        }
    }

    return null;
}


function validateCategory(category) {
    if (!category || typeof category !== "object") {
        throw new Error("Invalid category structure");
    }
}

module.exports = {
    getCategoryPaths,
    findCategoryById,
    findCategoryByIdIterative
};
