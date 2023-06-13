var express = require('express');
var router = express.Router();
const favoriteController = require('../../components/Favorite/FavoriteController');


// http://localhost:3000/favorite/api/get-all
router.get('/get-all', [], async (req, res, next) => {
    try {
        const { idUser } = req.query
        const favorite = await favoriteController.getAllFavorite(idUser);
        if (favorite) {
            return res.status(200).json({ message: "Success", result: true, favorite: favorite, });
        }
        return res.status(400).json({ message: "Failed", result: false, favorite: null, });

    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});

// http://localhost:3000/favorite/api/get-by-idUser?idUser
router.get('/get-by-idUser', async (req, res, next) => {
    try {
        const { idUser } = req.query;
        const favorite = await favoriteController.getFavoriteByIdUser(idUser);
        if (favorite) {
            return res.status(200).json({ result: true, favorite: favorite, message: "Success" });
        }
        return res.status(400).json({ result: false, favorite: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});


// http://localhost:3000/favorite/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { idRecipe, idUser } = req.query;
        // console.log(idRecipe, idUser);
        const favorite = await favoriteController.deleteFavoriteById(idRecipe, idUser);
        if (favorite) {
            return res.status(200).json({ result: true, favorite: favorite, message: "delete success" });
        }
        return res.status(400).json({ result: false, favorite: null, message: "Failed to delete" });
    } catch (error) {
        return res.status(500).json({ result: false, favorite: null });
    }
});
// http://localhost:3000/favorite/api/new-to-favorite
router.post('/new-to-favorite', async (req, res, next) => {
    try {
        const { idUser, idRecipe } = req.body;
        // console.log(idUser, idRecipe)
        const favorite = await favoriteController.addNewFavorite(idUser, idRecipe);
        if (favorite) {
            return res.status(200).json({ result: true, favorite: favorite, message: "Add new success" });
        }
        return res.status(400).json({ result: false, favorite: null, message: "Failed to add new" });
    } catch (error) {
        return res.status(500).json({ result: false, favorite: null });
    }
});
module.exports = router;