const FavoriteModel = require('./FavoriteModel');
const RecipeModel = require('../Recipe/RecipeModel');

const getAllFavorite = async (idUser) => {
    try {
        return await FavoriteModel.find({}, 'idUser idRecipe')
            .populate("idUser", "email avatar name")
            .populate('idRecipe', "title description image steps ingredients author time")
            .populate("idRecipe.steps", "content numStep")
            .populate("idRecipe.ingredients", "name quantity unit")
    } catch (error) {
        console.log('Get all Favoritee error:', error);
        throw error;
    }
}

const deleteFavoriteById = async (idRecipe, idUser) => {
    try {
        const user = await FavoriteModel.find({ idUser: idUser })
        // console.log("======>", user);

        if (user) {
            const favorite = await FavoriteModel.findOneAndDelete({ _id: idRecipe, idUser: idUser });
            // console.log("====ibacsuiasc>", favorite);
            return favorite;
        } else {
            return false;

        }
    } catch (error) {
        console.log('Deleta Favorite by id error: ', error);
        return false;
    }
}

const addNewFavorite = async (idUser, idRecipe) => {
    try {
        const user = await FavoriteModel.find({ idUser: idUser })
        // console.log("USER", user);
        if (user != null) {
            const recipe = await FavoriteModel.findOne({ idUser: idUser, idRecipe: idRecipe });
            // console.log("=======>", recipe);
            if (recipe) {
                return false
            } else {
                const newFavorite = { idUser, idRecipe };
                const p = new FavoriteModel(newFavorite);
                await p.save();
                return true;
            }
        } else {
            const newFavorite = { idUser, idRecipe };
            const p = new FavoriteModel(newFavorite);
            await p.save();
            return true;
        }
    } catch (error) {
        console.log('Add new Favorite error: ', error);
        return false;
    }
}

const getFavoriteByIdUser = async (idUser) => {
    try {
        const favorite = await FavoriteModel.find({ idUser: idUser }, 'idUser idRecipe')
            .populate("idUser", "email name")
            .populate('idRecipe', "title description image steps ingredients author time")
            .populate("idRecipe.steps", "content numStep")
            .populate("idRecipe.ingredients", "name quantity unit")
            .populate("idRecipe.author", "name avatar")

        // console.log(favorite);
        if (favorite != []) {
            return favorite
        }else{
            return false
        }

    } catch (error) {
        console.log("Get product by id error " + error);
        return null;
    }
}

const getByIdRecipe = async (id) => {
    try {
        return recipeModel.findById(id);
    } catch (error) {
        console.log("Get product by id error " + error);
        return null;
    }
}

const searchByTitle = async (title) => {
    try {
        const recipe = await FavoriteModel.find({}, 'idUser idRecipe')
            .populate("idUser", "email name")
            .populate('idRecipe', "title description image steps ingredients author time")
            .populate("idRecipe.steps", "content numStep")
            .populate("idRecipe.ingredients", "name quantity unit")

        if (recipe.length === 0) {
            return false
        }
        return recipe

    } catch (error) {
        console.log('search recipe by name error ', error);
    }
    return null;
}

module.exports = { getAllFavorite, deleteFavoriteById, addNewFavorite, getFavoriteByIdUser, };

