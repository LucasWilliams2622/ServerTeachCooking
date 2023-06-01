const recipeModel = require('./RecipeModel');

const getAllRecipe = async (page, size) => {
    try {
        return await recipeModel.find();
    } catch (error) {
        console.log('Get all recipe error:', error);
        throw error;
    }
}
const getAllRecipe_vs2 = async (page, size) => {
    let skip = (page - 1) * size;
    let limit = size;
    try {

        return await productModel
            .find({}, 'title description ingredients') // lay hai filed name price 
            .populate('ingredients', '')
            .sort({ name: -1 }) // sap xep theo ten 1 : tang dan , -1 :giam dan
            .skip(2) // bo qua bao nhieu san pham
            .limit(3); // gioi han so san pham
    } catch (error) {
        console.log('Get all recipe error:', error);
        throw error;
    }
}

const deleteById = async (id) => {
    try {
        await recipeModel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.log('Deleta product by id error: ', error);
        return false;
    }
}

const addNewRecipe = async (title, description, image, ingredients, steps, time, difficulty, mealType, author) => {
    try {
        const newRecipe = { title, description, image, ingredients, steps, time, difficulty, mealType, author };
        const p = new recipeModel(newRecipe);
        await p.save();
        return true;
    } catch (error) {
        console.log('Add new recipe error: ', error);
        return false;
    }
}

const getById = async (id) => {
    try {
        return await recipeModel.findById(id);
    } catch (error) {
        console.log("Get product by id error " + error);
        return null;
    }
}


const updateById = async (id, title, description, image, ingredients, steps, time, difficulty, mealType, author) => {
    try {
        const recipe = await recipeModel.findById(id);
        if (recipe) {
            recipe.title = title ? title : recipe.title;
            recipe.description = description ? description : recipe.description;
            recipe.image = image ? image : recipe.image;
            recipe.ingredients = ingredients ? ingredients : recipe.ingredients;
            recipe.steps = steps ? steps : recipe.steps;
            recipe.time = time ? time : recipe.time;
            recipe.difficulty = difficulty ? difficulty : recipe.difficulty;
            recipe.mealType = mealType ? mealType : recipe.mealType;
            recipe.author = author ? author : recipe.author;
            await recipe.save();
            return true;
        }
    } catch (error) {
        console.log("Update recipe by Id error " + error);
        return false;
    }
}


const searchByTitle = async (title) => {
    try {
        // return await recipeModel.findOne({
        //     name:
        //         // ten co chua , ko phan biet hoa thuong
        //         { $regex: title, $options: 'i' },
        //     $or: [{ quantity: { $lt: 5 } }, { quantity: { $gt: 50 } }]
        // });

        const recipe = await recipeModel.find({ title })
        console.log(recipe);
        return recipe

    } catch (error) {
        console.log('search recipe by name error ', error);
    }
    return null;
}
const searchByAuthor = async (author) => {
    try {
        const recipe = await recipeModel.find({ author })
        console.log(recipe);
        return recipe

    } catch (error) {
        console.log('search recipe by name error ', error);
    }
    return null;
}

module.exports = {
    getAllRecipe, deleteById, addNewRecipe,
    getById, updateById, searchByTitle,
    searchByAuthor
};

