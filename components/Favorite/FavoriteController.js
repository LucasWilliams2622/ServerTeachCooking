const favoriteService = require('./FavoriteService');

const getAllFavorite = async (page, size) => {
    try {
        return await favoriteService.getAllFavorite(page, size);

    } catch (error) {
        return false;
    }
}

const deleteFavoriteById = async (idRecipe) => {
    try {
        return await favoriteService.deleteFavoriteById(idRecipe);
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

const getFavoriteById = async (idUser) => {
    try {
        return await favoriteService.getFavoriteById(idUser);
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

const searchFavoriteByName = async (name) => {
    try {
        return await favoriteService.searchFavoriteByName(name);
    } catch (error) {
        console.log('Search recipe by name error: ', error);

    }
    return null;
}
module.exports = { getAllFavorite, deleteFavoriteById, addNewFavorite, getFavoriteById, updateFavoriteById, searchFavoriteByName };