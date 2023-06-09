const express = require('express');
const router = express.Router();
const recipeController = require('../../components/Recipe/RecipeController');
const upLoadImage = require("../../MiddleWare/UpLoadImage")

// http://localhost:3001/recipe/api/get-all
router.get('/get-all', [], async (req, res, next) => {
    try {
        const recipe = await recipeController.getAllRecipe();
        return res.status(200).json({ result: true, recipe: recipe, error: false });
    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});
// http://localhost:3001/recipe/api/changeLimit
router.get('/changeLimit', [], async (req, res, next) => {
    try {
        const recipe = await recipeController.changeLimitPage();
        return res.status(200).json({ result: true, recipe: recipe, error: false });
    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});

// http://localhost:3001/recipe/api/get-by-id/
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const recipe = await recipeController.getById(id);
        if (recipe) {
            return res.status(200).json({ result: true, recipe: recipe, error: false });

        }
        return res.status(400).json({ result: false, recipe: null, error: true });

    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});
// http://localhost:3001/recipe/api/search-by-title
router.get('/search-by-title', [], async (req, res, next) => {
    try {
        const { title } = req.query;
        // console.log(title)
        const recipe = await recipeController.searchByTitle(title);
        if (recipe) {
            return res.status(200).json({ result: true, recipe: recipe });
        }
        return res.status(200).json({ result: false });
    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});
// http://localhost:3001/recipe/api/search-by-author
router.get('/search-by-author', [], async (req, res, next) => {
    try {
        const { author } = req.query;
        // console.log(author)
        const recipe = await recipeController.searchByAuthor(author);
        if (recipe) {
            return res.status(200).json({ result: true, recipe: recipe });
        }
        return res.status(400).json({ result: false });
    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});
// http://localhost:3001/recipe/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { _id,idUser } = req.query;
        // console.log("_id,idUser",_id,idUser);
        const recipe = await recipeController.deleteById(_id,idUser);
        if (recipe) {
            return res.status(200).json({ result: true, message: "Delete Success" });
        }
        return res.status(400).json({ result: false, message: "Delete Failed" });

    } catch (error) {
        return res.status(500).json({ result: false, products: null });
    }
});


// http://localhost:3001/recipe/api/update-by-id/
router.put('/update-by-id/', [upLoadImage.single('image')], async (req, res, next) => {
    try {
        let { file, body } = req;
        if (file) {
            file = `http://10.0.2.2:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        const { id } = req.query;
        const { title, description, image, ingredients, steps, time, difficulty, mealType, author } = body;
        const recipe = await recipeController.updateByid(id, title, description, image, ingredients, steps, time, difficulty, mealType, author);
        if (recipe) {
            return res.status(200).json({ result: true, recipe: recipe });
        }
        return res.status(400).json({ result: false, recipe: null });
    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});


// http://localhost:3001/recipe/api/new
router.post('/new', [upLoadImage.single('image')], async (req, res, next) => {
    try {
        let { file, body } = req;
        if (file) {
            file = `http://10.0.2.2:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        const { title, description, image, ingredients,
            steps, category, idComment, author,
            idVideo, time, difficulty, mealType,
            createdAt, updatedAt } = body;
        const recipe = await recipeController.addNewRecipe(title, description, image, ingredients,
            steps, category, idComment, author, idVideo,
            time, difficulty, mealType, createdAt, updatedAt);
        return res.status(200).json({ message: "Add new success", result: true, recipe: recipe });
    } catch (error) {
        return res.status(500).json({ result: false, recipe: null });
    }
});

//http://localhost:3000/recipe/api/upload-image
router.post('/upload-image', [upLoadImage.single('image')], async (req, res, next) => {
    try {
        const { file } = req;
        if (file) {
            const link = `http://10.0.2.2:3000/images/${file.filename}`;
            return res.status(200).json({ result: true, link: link })
        }
        return res.status(400).json({ result: false, link: null })
    } catch (error) {
        console.log("Failed to updaload error:" + error);
        return res.status(500).json({ result: false, massage: "Failed to updaload avatar" })
    }
})




module.exports = router;