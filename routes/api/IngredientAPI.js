const express = require('express');
const router = express.Router();
const ingredientController = require('../../components/Ingredient/IngredientController');


// http://localhost:3001/ingredient/api/get-all

router.get('/get-all', [], async (req, res, next) => {
    try {
        const ingredient = await ingredientController.getAllIngredient();
        return res.status(200).json({ result: true, ingredient: ingredient, error: false });

    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});

// // http://localhost:3001/ingredient/api/get-by-id/:id


router.get('/get-by-id/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const ingredient = await ingredientController.getIngredientById(id);
        return res.status(200).json({ result: true, ingredient: ingredient, error: false });

    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});
// http://localhost:3001/ingredient/api/search-by-name
router.get('/search-by-name', [], async (req, res, next) => {
    try {
        const { name } = req.body;
        const ingredient = await ingredientController.searchIngredientByName(name);
        return res.status(200).json({ result: true, ingredient: ingredient });

    } catch (error) {
        return res.status(500).json({ result: false, ingredient: null });
    }
});


// http://localhost:3001/ingredient/api/delete-by-id/:id
router.delete('/delete-by-id/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const ingredient = await ingredientController.deleteIngredientById(id);
        return res.status(200).json({ result: true });

    } catch (error) {
        return res.status(500).json({ result: false, ingredient: null });
    }
});


// http://localhost:3001/ingredient/api/update-by-id/:id
router.post('/update-by-id/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, quantity, unit } = req.body;
        const ingredient = await ingredientController.updateIngredientById(id, name, quantity, unit);
        return res.status(200).json({ result: true, ingredient: null });

    } catch (error) {
        return res.status(500).json({ result: false, recingredientipe: null });
    }
});


// http://localhost:3001/ingredient/api/new


router.post('/new', async (req, res, next) => {
    try {

        const { name, quantity, unit } = req.body;
        await ingredientController.addNewIngredient(name, quantity, unit);
        return res.status(200).json({ result: true, ingredient: null });

    } catch (error) {
        return res.status(500).json({ result: false, ingredient: null });
    }
});






module.exports = router; 