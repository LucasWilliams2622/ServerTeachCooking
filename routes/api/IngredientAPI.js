const express = require('express');
const router = express.Router();
const ingredientController = require('../../components/Ingredient/IngredientController');

// http://localhost:3001/ingredient/api/get-all
router.get('/get-all', [], async (req, res, next) => {
    try {
        const ingredient = await ingredientController.getAllIngredient();
        if (ingredient) {
            return res.status(200).json({ message: "Success", result: true, ingredient: ingredient, });
        }
        return res.status(400).json({ message: "Failed", result: false, ingredient: null, });

    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});

//  http://localhost:3001/ingredient/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const ingredient = await ingredientController.getIngredientById(id);
        if (ingredient) {
            return res.status(200).json({ result: true, ingredient: ingredient, message: "Success" });
        }
        return res.status(400).json({ result: false, ingredient: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});
// http://localhost:3001/ingredient/api/search-by-name
router.get('/search-by-name', [], async (req, res, next) => {
    try {
        const { name } = req.query;
        const ingredient = await ingredientController.searchIngredientByName(name);
        if (ingredient) {
            return res.status(200).json({ result: true, ingredient: ingredient, message: "search success" });
        }
        return res.status(400).json({ result: false, ingredient: null, message: "Failed to search" });
    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});
// http://localhost:3001/ingredient/api/delete-by-id/
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const ingredient = await ingredientController.deleteIngredientById(id);
        if (ingredient) {
            return res.status(200).json({ result: true, ingredient: ingredient, message: "delete success" });
        }
        return res.status(400).json({ result: false, ingredient: null, message: "Failed to delete" });
    } catch (error) {
        return res.status(500).json({ result: false, ingredient: null });
    }
});


// http://localhost:3001/ingredient/api/update-by-id/
router.put('/update-by-id/', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { name, quantity, unit } = req.body;
        const ingredient = await ingredientController.updateIngredientById(id, name, quantity, unit);
        if (ingredient) {
            return res.status(200).json({ result: true, ingredient: ingredient, message: "update  success" });
        }
        return res.status(400).json({ result: false, ingredient: null, message: "Failed to  update" });
    } catch (error) {
        return res.status(500).json({ result: false, recingredientipe: null });
    }
});


// http://localhost:3001/ingredient/api/new
router.post('/new', async (req, res, next) => {
    try {
        const { name, quantity, unit } = req.body;
        console.log(name, quantity, unit)
        const ingredient = await ingredientController.addNewIngredient(name, quantity, unit);
        if (ingredient) {
            return res.status(200).json({ result: true, ingredient: ingredient, message: "Add new success" });
        }
        return res.status(400).json({ result: false, ingredient: null, message: "Failed to add new" });
    } catch (error) {
        return res.status(500).json({ result: false, ingredient: null });
    }
});



module.exports = router; 