var express = require('express');
var router = express.Router();


const categoryController = require('../../components/Category/CategoryController');

// http://localhost:3000/category/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const category = await categoryController.getAllCategory();
        return res.status(200).json({ result: true, category: category });
    } catch (error) {
        return res.status(500).json({ result: false, category: null });

    }
});
//http://localhost:3000/category/api/delete-by-id?id=
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const category = await categoryController.deleteCategoryById(id);
        if (category) {
            return res.status(200).json({ message: "delete success", result: true, category: category });
        }
        return res.status(400).json({ message: "Failed to delete", result: true, category: category });
    } catch (error) {
        return res.status(500).json({ result: false, category: null });
    }
});
//http://localhost:3000/category/api/search-by-name?name=
router.get('/search-by-name', async (req, res, next) => {
    try {
        const { name } = req.query;
        const category = await categoryController.searchCategoryByName(name);
        if (category) {
            return res.status(200).json({ message: "search success", result: true, category: category });
        }
        return res.status(400).json({ message: "Failed to search", result: true, category: category });
    } catch (error) {
        return res.status(500).json({ result: false, category: null });
    }
});
//http://localhost:3000/category/api/add-new
router.post('/add-new', [], async (req, res, next) => {
    try {
        const { name } = req.body;
        const category = await categoryController.addNewCategory(name);
        if (category) {
            return res.status(200).json({ message: "Add new success", result: true, category: category });
        }
        return res.status(400).json({ message: "Failed to add new", result: true, category: category });
    } catch (error) {
        console.log(error);
        next(error);//danh cho web
        return res.status(500).json({ result: false, message: 'loi he thong' });
    }
});
//http://localhost:3000/category/api/update-by-id?id=
router.put('/update-by-id', [], async (req, res, next) => {

    try {
        const { id } = req.query;
        const { name } = req.body;
        console.log(name,id)
        const category = await categoryController.updateCategoryById(id, name);
         if (category) {
            return res.status(200).json({ message: "Add new success", result: true, category: category });
        }
        return res.status(400).json({ message: "Failed to add new", result: true, category: category });
    } catch (error) {
        console.log(error);
        next(error);//danh cho web
        return res.status(500).json({ result: false, message: 'loi he thong' });
    }
});
module.exports = router;