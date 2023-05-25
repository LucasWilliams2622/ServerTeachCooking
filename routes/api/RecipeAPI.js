const express = require('express');
const router = express.Router();
const recipeController = require('../../components/Recipe/RecipeController');
const upLoadImage = require("../../MiddleWare/UpLoadImage")

// http://localhost:3001/recipe/api/get-all
// http://localhost:3001/recipe/api/get-all

router.get('/get-all', [], async (req, res, next) => {
    try {
        const recipe = await recipeController.getAllRecipe();
        return res.status(200).json({ result: true, recipe: recipe, error: false });

    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});

// // http://localhost:3001/recipe/api/get-by-id/:id


router.get('/get-by-id/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const recipe = await recipeController.getRecipeById(id);
        return res.status(200).json({ result: true, recipe: recipe, error: false });

    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});
// http://localhost:3001/recipe/api/search-by-title
router.get('/search-by-title', [], async (req, res, next) => {
    try {
        const { title } = req.body;
        const recipe = await recipeController.searchRecipeByName(title);
        return res.status(200).json({ result: true, recipe: recipe });

    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});
// http://localhost:3001/recipe/api/delete-by-id/:id
router.delete('/delete-by-id/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const recipe = await recipeController.deleteRecipeById(id);
        return res.status(200).json({ result: true });

    } catch (error) {
        return res.status(500).json({ result: false, products: null });
    }
});


// http://localhost:3001/recipe/api/update-by-id/:id
router.post('/update-by-id/:id', [upLoadImage.single('image')], async (req, res, next) => {
    try {
        let { file, body } = req;
        if (file) {
            file = `http://192.168.2.8:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        const { id } = req.params;
        const { title, description, image, ingredients, steps, time, difficulty, mealType, author } = body;
        const recipe = await recipeController.updateRecipetById(id, title, description, image, ingredients, steps, time, difficulty, mealType, author);
        return res.status(200).json({ result: true, recipe: null });

    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});


// http://localhost:3001/recipe/api/new


router.post('/new', [upLoadImage.single('image')], async (req, res, next) => {
    try {
        let { file, body } = req;
        if (file) {
            file = `http://192.168.2.8:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        const { title, description, image, ingredients, steps, time, difficulty, mealType, author } = body;
        await recipeController.addNewRecipe(title, description, image, ingredients, steps, time, difficulty, mealType, author);
        return res.status(200).json({ result: true, recipe: null });

    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});






module.exports = router;