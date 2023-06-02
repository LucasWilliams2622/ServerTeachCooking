const stepModel = require('./StepModel');

const getAll = async (page, size) => {
    try {
        return await stepModel.find();
    } catch (error) {
        console.log('Get all recipe error:', error);
        throw error;
    }
}
const getAll_vs2 = async (page, size) => {
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
        await stepModel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.log('Deleta product by id error: ', error);
        return false;
    }
}

const addNew = async (content, numStep) => {
    try {
        const newRecipe = { content, numStep };
        const p = new stepModel(newRecipe);
        await p.save();
        return true;
    } catch (error) {
        console.log('Add new recipe error: ', error);
        return false;
    }
}

const getById = async (id) => {
    try {
        return await stepModel.findById(id);
    } catch (error) {
        console.log("Get product by id error " + error);
        return null;
    }
}


const updateById = async (id, content, numStep) => {
    try {
        const recipe = await stepModel.findById(id);
        if (recipe) {
            recipe.content = content ? content : recipe.content;
            recipe.numStep = numStep ? numStep : recipe.numStep;
           
            await recipe.save();
            return true;
        }
    } catch (error) {
        console.log("Update recipe by Id error " + error);
        return false;
    }
}


const searchByContent = async (title) => {
    try {
        // return await stepModel.findOne({
        //     name:
        //         // ten co chua , ko phan biet hoa thuong
        //         { $regex: title, $options: 'i' },
        //     $or: [{ quantity: { $lt: 5 } }, { quantity: { $gt: 50 } }]
        // });

        const recipe = await stepModel.find({ title })
        console.log(recipe);
        return recipe

    } catch (error) {
        console.log('search recipe by name error ', error);
    }
    return null;
}


module.exports = {
    getAll, deleteById, addNew,
    getById, updateById, searchByContent,
    
};

