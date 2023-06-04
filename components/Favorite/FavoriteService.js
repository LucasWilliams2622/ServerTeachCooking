const FavoriteModel = require('./FavoriteModel');

const getAllFavorite = async (page, size) => {
    try {
        return await FavoriteModel.find({}, 'idUser idRecipe')
            .populate("idUser", "email name")
            .populate('idRecipe', "title description image steps ingredients author")
            .populate("idRecipe.steps","content numStep")
            .populate("idRecipe.ingredients","name quantity unit")


            ;
    } catch (error) {
        console.log('Get all Favoritee error:', error);
        throw error;
    }
}

const deleteFavoriteById = async (id) => {
    try {
        const recipe = await FavoriteModel.findOne({ id: id });
        console.log(recipe);
        {
             FavoriteModel.deleteOne(recipe)
        }
        return true;
    } catch (error) {
        console.log('Deleta Favorite by id error: ', error);
        return false;
    }
}

const addNewFavorite = async (idUser, idRecipe) => {
    try {
       

        const recipe = await FavoriteModel.findOne({ idRecipe: idRecipe });
        console.log("=======>", recipe);
        if (recipe) {
            return false
        } else {
            const newFavorite = { idUser, idRecipe };
            const p = new FavoriteModel(newFavorite);
            await p.save();
            return true;
        }

    } catch (error) {
        // console.log('Add new Favorite error: ', error);
        return false;
    }
}

const getFavoriteById = async (idUser) => {
    try {
        return await FavoriteModel.findById(idUser);
    } catch (error) {
        console.log("Get product by id error " + error);
        return null;
    }
}

// tim kien san pham theo ten
const searchFavoriteByName = async (name) => {
    try {
        return await FavoriteModel.find({
            name:
                // ten co chua , ko phan biet hoa thuong
                { $regex: name, $options: 'i' },
            $or: [{ quantity: { $lt: 5 } }, { quantity: { $gt: 50 } }]
        });
    } catch (error) {
        console.log('search Favorite by name error ', error);

    }
    return null;
}


module.exports = { getAllFavorite, deleteFavoriteById, addNewFavorite, getFavoriteById, searchFavoriteByName, };

