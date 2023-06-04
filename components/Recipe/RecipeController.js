const recipeService = require('./RecipeService');

const getAllRecipe = async () => {
    try {
        return await recipeService.getAllRecipe();
    } catch (error) {
        return false;
    }
}

const deleteById = async (id) => {
    try {
        return await recipeService.deleteById(id);
    } catch (error) {
        return false;
    }
}

const addNewRecipe = async (title, description, image, ingredients, steps, category, idComment, author, idVideo, time, difficulty, mealType,createdAt,updatedAt) => {
    try {
        return await recipeService.addNewRecipe(
            title, description, image, ingredients, 
            steps, category, idComment, author, 
            idVideo, time, difficulty, mealType,
            createdAt,updatedAt);
    } catch (error) {
        return false;
    }
}

const getById = async (id) => {
    try {
        return await recipeService.getById(id);
    } catch (error) {
        return null;
    }
}

const updateById = async (id, title, description, image, ingredients, steps, category, idComment, author, idVideo, time, difficulty, mealType,createdAt,updatedAt) => {
    try {
        return await recipeService.updateById(id, title, description, image, ingredients, steps, category, idComment, author, idVideo, time, difficulty, mealType,createdAt,updatedAt);
    } catch (error) {
        return false;
    }
}

const searchByTitle = async (title) => {
    try {
        return await recipeService.searchByTitle(title);
    } catch (error) {
        console.log('Search recipe by name error: ', error);
    }
    return null;
}
const searchByAuthor = async (author) => {
    try {
        return await recipeService.searchByAuthor(author);
    } catch (error) {
        console.log('Search recipe by name error: ', error);
    }
    return null;
}
module.exports = {
    getAllRecipe, deleteById, addNewRecipe,
    getById, updateById, searchByTitle,
    searchByAuthor,
};