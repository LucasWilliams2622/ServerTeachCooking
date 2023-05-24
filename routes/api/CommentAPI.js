var express = require('express');
var router = express.Router();
const commentController=require('../../components/Comment/CommentController');
const upLoadImage = require("../../MiddleWare/UpLoadImage");

//http://localhost:3000/comment/api/add-new
router.post('/add-new',[upLoadImage.single('image')],async(req,res,next)=>{

    try {
        let {file,body}=req;
        if(file)
        {
            file = `http://192.168.0.100:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        const {name, content, image}=body;
        await commentController.addNewCommnet(name,content,image);
        return res.status(200).json({result:true,user:true});
        
    } catch (error) {
        console.log(error);
        next(error);//danh cho web
        return res.status(500).json({result:false,message:'loi he thong'});
        
    }
});

//http://localhost:3000/comment/api/delete-by-id?id=
router.get('/delete-by-id',async(req,res,next)=>{
    try {
        const {id}=req.query;
        const comment=await commentController.deleteCommentById(id);
        return res.status(200).json({result:true,comment:comment});
    } catch (error) {
        return res.status(500).json({result:false,comment:null});
    }
});
//http://localhost:3000/comment/api/delete-by-id?name=
router.get('/delete-by-id',async(req,res,next)=>{
    try {
        const {name}=req.query;
        const comment=await commentController.deleteCommentByName(name);
        return res.status(200).json({result:true,comment:comment});
    } catch (error) {
        return res.status(500).json({result:false,comment:null});
    }
});

//http://localhost:3000/comment/api/get-all
router.get('/get-all' ,async(req,res,next)=>{
    try {
        const comment=await commentController.getAllComment();

       

        return res.status(200).json({result:true,comment:comment});
    } catch (error) {
        return res.status(500).json({result:false,comment:null});
        
    }
});
//http://localhost:3000/comment/api/update-by-id?id=
router.post('/update-by-id',[upLoadImage.single('image')],async(req,res,next)=>{

    try {
        const {id}=req.query;
        let {file,body}=req;
        if(file)
        {
            file = `http://192.168.0.103:3000/images/${file.filename}`;
            body = { ...body, image: file };
        }
        
        const {name, content,  image}=req.body;
        const user=await commentController.updateCommentById(id,name,content, image);
      
            return res.status(200).json({result:true,user:user});
      
        
    } catch (error) {
        console.log(error);
        next(error);//danh cho web
        return res.status(500).json({result:false,message:'loi he thong'});
        
    }
});

module.exports = router;