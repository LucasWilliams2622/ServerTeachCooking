var express = require('express');
var router = express.Router();
const commentController = require('../../components/Comment/CommentController');
const upLoadImage = require("../../MiddleWare/UpLoadImage");

//http://localhost:3000/comment/api/add-new
router.post('/add-new', [upLoadImage.single('image')], async (req, res, next) => {
    try {
        let { file, body } = req;
        if (file) {
            file = `http://10.0.2.2:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        const { name, content, image } = body;
        const comment = await commentController.addNewCommnet(name, content, image);
        if (comment) {
            return res.status(200).json({ message: 'Add new success', result: true, comment: comment });
        }
        return res.status(400).json({ result: false, comment: null });

    } catch (error) {
        console.log(error);
        next(error);//danh cho web
        return res.status(500).json({ result: false, message: 'loi he thong' });
    }
});

//http://localhost:3000/comment/api/delete-by-id?id=
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const comment = await commentController.deleteCommentById(id);
        if (comment) {
            return res.status(200).json({ message: 'delete success', result: true, comment: comment });
        }
        return res.status(400).json({ result: false, comment: null });
    } catch (error) {
        return res.status(500).json({ result: false, comment: null });
    }
});
//http://localhost:3000/comment/api/delete-by-name?name=
router.delete('/delete-by-name', async (req, res, next) => {
    try {
        const { name } = req.query;
        console.log(name)
        const comment = await commentController.deleteCommentByName(name);
        console.log(comment)
        if (comment) {
            return res.status(200).json({ message: 'delete success', result: true, comment: comment });
        }
        return res.status(400).json({ result: false, comment: null });
    } catch (error) {
        return res.status(500).json({ result: false, comment: null });
    }
});

//http://localhost:3000/comment/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const comment = await commentController.getAllComment();
        return res.status(200).json({ result: true, comment: comment });
    } catch (error) {
        return res.status(500).json({ result: false, comment: null });

    }
});
//http://localhost:3000/comment/api/update-by-id?id=
router.put('/update-by-id', [upLoadImage.single('image')], async (req, res, next) => {

    try {
        const { id } = req.query;
        let { file, body } = req;
        if (file) {
            file = `http://10.0.2.2:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        const { name, content, image } = req.body;
        const comment = await commentController.updateCommentById(id, name, content, image);
        if (comment) {
            return res.status(200).json({ message: 'update success', result: true, comment: comment });
        }
        return res.status(400).json({ message: 'update failed', result: false, comment: null });
    } catch (error) {
        console.log(error);
        next(error);//danh cho web
        return res.status(500).json({ result: false, message: 'loi he thong' });
    }
});

module.exports = router;