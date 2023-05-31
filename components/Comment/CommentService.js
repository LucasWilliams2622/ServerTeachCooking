const CommentModel = require('./CommentModel');
const addNewComment = async (name, content, image) => {
  try {
    const newComment = {
      name, content, image
    }
    const p = new CommentModel(newComment);
    await p.save();
    return true;

  } catch (error) {
    console.log('add new Coment error: ', error);
    return false;
  }
}
const getAllCommnent = async (page, size) => {
  try {
    // return data;
    return await CommentModel.find().populate('id', '');
  } catch (error) {
    console.log('get all category error:', error);
    throw error;
  }
}
const deleteCommentById = async (id) => {
  try {

    await CommentModel.findByIdAndDelete(id);
    return true;

  } catch (error) {
    console.log('Delete Comment by id error: ', error);
    return false;
  }
}
const updateCommentById = async (id, name, content, image) => {
  try {
    const comment = await CommentModel.findById(id);
    if (comment) {
      comment.name = name ? name : comment.name;
      comment.content = content ? content : comment.content;
      comment.image = image ? image : comment.image;
      await comment.save();
      return true;
    }
    return false;

  } catch (error) {
    console.log("update comment by id error: ", error);
    return false;

  }
};
const deleteCommentByName = async (name) => {
  try {
    console.log(name)
    const comment = await CommentModel.findOne({ name: name })
    console.log(comment)
    await CommentModel.deleteOne(comment)

    return true;
  } catch (error) {
    console.log('Delete Comment by id error: ', error);
    return false;
  }
}

module.exports = { addNewComment, getAllCommnent, deleteCommentById, updateCommentById, deleteCommentByName }