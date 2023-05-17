
const express = require('express');
const router = express.Router();
const productController=require('../../components/controller/productController');


//http://localhost:3000/product/add-new2
router.post('/add-new2',[],async(req,res,next)=>{

    try {
        let {body}=req;
        
        const {name, price, quantity, date = new Date()}=body;
        
        await productController.addNewProduct(name, price, quantity, date);
        return res.status(200).json({result:true,user:true});
        
    } catch (error) {
        console.log(error);
        next(error);//danh cho web
        return res.status(500).json({result:false,message:'loi he thong'});
        
    }
});
//http://localhost:3000/product/search-by-name2?name=john&quantity=30
router.get('/search-by-name2',async(req,res,next)=>{
    try {
        const {name,quantity}=req.query;
        const product=await productController.searchProductByName(name,quantity);
        return res.status(200).json({result:true,product:product});
    } catch (error) {
        return res.status(500).json({result:false,products:null});
    }
});

//http://localhost:3000/product/id/delete
router.post('/:id/delete',async(req,res,next)=>{
    try {
        const {id}=req.params;
        const product=await productController.deleteProductById(id);
        return res.status(200).json({result:true,product:product});
    } catch (error) {
        return res.status(500).json({result:false,products:null});
    }
});

module.exports = router;