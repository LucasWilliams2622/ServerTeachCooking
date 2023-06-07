const favoriteService = require('./FavoriteService');

const getAllFavorite = async (idUser) => {
    try {
        return await favoriteService.getAllFavorite(idUser);

    } catch (error) {
        return false;
    }
}

const deleteFavoriteById = async ( idRecipe,idUser) => {
    try {
        return await favoriteService.deleteFavoriteById( idRecipe,idUser);
    } catch (error) {
        return false;
    }
}

const addNewFavorite = async (idUser, idRecipe) => {
    try {
        return await favoriteService.addNewFavorite(idUser, idRecipe);
    } catch (error) {
        return false;
    }
}

const getFavoriteByIdUser = async (idUser) => {
    try {
        return await favoriteService.getFavoriteByIdUser(idUser);
    } catch (error) {
        return null;
    }
}


const updateFavoriteById = async (id, name, quantity, unit) => {
    try {
        return await favoriteService.updateFavoriteById(id, name, quantity, unit);
    } catch (error) {
        return false;
    }
}


module.exports = { getAllFavorite, deleteFavoriteById, addNewFavorite, getFavoriteByIdUser, updateFavoriteById,  };