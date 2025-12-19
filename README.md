# Category Tree Challenge

This project solves a technical challenge involving hierarchical category structures.

## Features

- Generate full category paths from a nested structure
- Search for a category by ID at any depth level

## Project Structure

src/
├── data.js # Sample category structure
├── categoryService.js # Business logic
└── index.js # Example execution


## Functions

### getCategoryPaths(category)

Returns an array of strings representing the full path of each category.

### findCategoryById(category, id)

Returns the category object that matches the given ID or `null` if not found.

## How to run

```bash
node src/index.js