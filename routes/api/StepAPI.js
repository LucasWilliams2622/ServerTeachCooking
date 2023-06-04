var express = require('express');
var router = express.Router();

const stepController = require('../../components/Step/StepController');

// http://localhost:3000/step/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const step = await stepController.getAllStep();
        return res.status(200).json({ result: true, step: step });
    } catch (error) {
        return res.status(500).json({ result: false, step: null });

    }
});
//http://localhost:3000/step/api/delete-by-id?id=
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const step = await stepController.deleteStepById(id);
        if (step) {
            return res.status(200).json({ message: "delete success", result: true, step: step });
        }
        return res.status(400).json({ message: "Failed to delete", result: false, step: step });
    } catch (error) {
        return res.status(500).json({ result: false, step: null });
    }
});

//http://localhost:3000/step/api/add-new
router.post('/add-new', [], async (req, res, next) => {
    try {
        const { content,numStep } = req.body;
        console.log(content,numStep);
        const step = await stepController.addNew(content,numStep);
        if (step) {
            return res.status(200).json({ message: "Add new success", result: true, step: step });
        }
        return res.status(400).json({ message: "Failed to add new", result: true, step: step });
    } catch (error) {
        console.log(error);
        next(error);//danh cho web
        return res.status(500).json({ result: false, message: 'loi he thong' });
    }
});
//http://localhost:3000/step/api/update-by-id?id=
router.put('/update-by-id', [], async (req, res, next) => {
    try {
        const { id } = req.query;
        const { content } = req.body;
        console.log(content,id)
        const step = await stepController.updateStepById(id, content);
         if (step) {
            return res.status(200).json({ message: "update success", result: true, step: step });
        }
        return res.status(400).json({ message: "Failed to update", result: true, step: step });
    } catch (error) {
        console.log(error);
        next(error);//danh cho web
        return res.status(500).json({ result: false, message: 'loi he thong' });
    }
});


module.exports = router;
