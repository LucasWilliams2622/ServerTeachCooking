const CommentService = require('./CommentService');
const addNewCommnet=async (name,content,image)=>{
    try{
        return await CommentService.addNewComment(name,content,image);
    }catch(error)
    {
        return false;
    }
 }
 const getAllComment = async (page,size) =>{
    try {
        return await CommentService.getAllCommnent(page,size);
    } catch (error) {
        return false;
    }
}
const deleteCommentById = async (id) =>{
    try {
        return await CommentService.deleteCommentById(id);
    } catch (error) {
        return false;
    }
}
const deleteCommentByName = async (name) =>{
    try {
        return await CommentService.deleteCommentByName(name);
    } catch (error) {
        return false;
    }
}
const updateCommentById=async(id,name, content,image)=>{
    try {
        return await CommentService.updateCommentById(id,name, content, image);
    } catch (error) {
        return false;
        
    }
 }

module.exports = {addNewCommnet,getAllComment,deleteCommentById,updateCommentById,deleteCommentByName};