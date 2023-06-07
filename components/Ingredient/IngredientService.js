const ingredientModel = require('./IngredientModel');

const getAllIngredient = async (page, size) => {
    try {
        return await ingredientModel.find();
    } catch (error) {
        console.log('Get all ingredient error:', error);
        throw error;
    }
}

const deleteIngredientById = async (id) => {
    try {
        await ingredientModel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.log('Delete ingredient by id error: ', error);
        return false;
    }
}

const addNewIngredient = async (name, quantity, unit, idRecipe) => {
    try {
        const newIngredient = { name, quantity, unit, idRecipe };
        const p = new ingredientModel(newIngredient);
        await p.save();
        return true;
    } catch (error) {
        console.log('Add new Ingredient error: ', error);
        return false;
    }
}

const getIngredientById = async (idRecipe) => {
    try {
        return await ingredientModel.findById({ idRecipe: idRecipe });
    } catch (error) {
        console.log("Get product by id error " + error);
        return null;
    }
}


const updateIngredientById = async (id, name, quantity, unit) => {
    try {

        const ingredient = await ingredientModel.findById(id);
        if (ingredient) {
            ingredient.name = name ? name : ingredient.name;
            ingredient.quantity = quantity ? quantity : ingredient.quantity;
            ingredient.unit = unit ? unit : ingredient.unit;
            await ingredient.save();
            return true;
        }

    } catch (error) {
        console.log("Update Ingredient by Id error " + error);
        return false;
    }
}

// tim kien san pham theo ten
const searchIngredientByName = async (idRecipe) => {
    try {
        const ingredient = await ingredientModel.find({ idRecipe: idRecipe})
        console.log(ingredient);
        if (ingredient!=null) {
            return ingredient
        }
        else {
            return false
        }
    } catch (error) {
        console.log('search Ingredient by name error ', error);

    }
    return null;
}


module.exports = { getAllIngredient, deleteIngredientById, addNewIngredient, getIngredientById, updateIngredientById, searchIngredientByName, };

