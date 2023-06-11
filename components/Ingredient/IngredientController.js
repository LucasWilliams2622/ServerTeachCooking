const ingredientService = require('./IngredientService');

const getAllIngredient = async (page, size) => {
    try {
        return await ingredientService.getAllIngredient(page, size);

    } catch (error) {
        return false;
    }
}

const deleteIngredientById = async (id) => {
    try {
        return await ingredientService.deleteIngredientById(id);
    } catch (error) {
        return false;
    }
}

const addNewIngredient = async (name, quantity, unit, idRecipe) => {
    try {
        return await ingredientService.addNewIngredient(name, quantity, unit, idRecipe);

    } catch (error) {
        return false;
    }
}

const getIngredientById = async (idRecipe) => {
    try {
        return await ingredientService.getIngredientById(idRecipe);
    } catch (error) {
        return null;
    }
}


const updateIngredientById = async (id, name, quantity, unit) => {
    try {
        return await ingredientService.updateIngredientById(id, name, quantity, unit);
    } catch (error) {
        return false;
    }
}

const searchIngredientByName = async (idRecipe) => {
    try {
        return await ingredientService.searchIngredientByName(idRecipe);
    } catch (error) {
        console.log('Search recipe by name error: ', error);

    }
    return null;
}
module.exports = { getAllIngredient, deleteIngredientById, addNewIngredient, getIngredientById, updateIngredientById, searchIngredientByName };