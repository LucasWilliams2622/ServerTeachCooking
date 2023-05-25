const recipeService = require('./RecipeService');

const getAllRecipe = async (page, size) => {
    try {
        return await recipeService.getAllRecipe(page, size);

    } catch (error) {
        throw error;
    }
}

const deleteRecipeById = async (id) => {
    try {
        return await recipeService.deleteRecipeById(id);
    } catch (error) {
        return false;
    }
}

const addNewRecipe = async (title, description, image, ingredients, steps, time, difficulty, mealType, author) => {
    try {
        return await recipeService.addNewRecipe(title, description, image, ingredients, steps, time, difficulty, mealType, author);

    } catch (error) {
        return false;
    }
}

const getRecipeById = async (id) => {
    try {
        return await recipeService.getRecipeById(id);
    } catch (error) {
        return null;
    }
}


const updateRecipeById = async (id, title, description, image, ingredients, steps, time, difficulty, mealType, author) => {
    try {
        return await recipeService.updateRecipeById(id, title, description, image, ingredients, steps, time, difficulty, mealType, author);
    } catch (error) {
        return false;
    }
}

const searchRecipeByName = async (title) => {
    try {
        return await recipeService.searchRecipeByName(title);
    } catch (error) {
        console.log('Search recipe by name error: ', error);

    }
    return null;
}
module.exports = { getAllRecipe, deleteRecipeById, addNewRecipe, getRecipeById, updateRecipeById, searchRecipeByName };