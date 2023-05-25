const ingredientModel = require('./IngredientModel');

const getAllIngredient = async (page, size) => {
    try {
        return await ingredientModel.find();
    } catch (error) {
        console.log('Get all ingrediente error:', error);
        throw error;
    }
}

const deleteIngredientById = async (id) => {
    try {
        await ingredientModel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.log('Deleta ingredient by id error: ', error);
        return false;
    }
}

const addNewIngredient = async (name, quantity, unit) => {
    try {
        const newIngredient = { name, quantity, unit };
        const p = new ingredientModel(newIngredient);
        await p.save();
        return true;
    } catch (error) {
        console.log('Add new Ingredient error: ', error);
        return false;
    }
}

const getIngredientById = async (id) => {
    try {
        return await ingredientModel.findById(id);
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
const searchIngredientByName = async (name) => {
    try {
        return await ingredientModel.find({
            name:
                // ten co chua , ko phan biet hoa thuong
                { $regex: name, $options: 'i' }
        });
    } catch (error) {
        console.log('search Ingredient by name error ', error);
    }
    return null;
}


module.exports = { getAllIngredient, deleteIngredientById, addNewIngredient, getIngredientById, updateIngredientById, searchIngredientByName, };

