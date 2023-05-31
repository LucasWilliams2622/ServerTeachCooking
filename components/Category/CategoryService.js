const CatagoryModel = require('./CategoryModel');
const getAllCategory = async (page, size) => {
  try {
    return await CatagoryModel.find().populate('name', '');
  } catch (error) {
    console.log('get all product error:', error);
    throw error;
  }
}
const addNewCategory = async (name) => {
  try {
    const newCategory = {
      name
    }
    const p = new CatagoryModel(newCategory);
    await p.save();
    return true;

  } catch (error) {
    console.log('add new category error: ', error);
    return false;
  }
}
const deleteCategoryById = async (id) => {
  try {
    await CatagoryModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log('Delete category by id error: ', error);
    return false;
  }
}

const updateCategoryById = async (id, name) => {
  try {
    const category = await CatagoryModel.findById(id);
    if (category) {
      category.name = name ? name : category.name;
      await category.save();
      return true;
    }
    return false;

  } catch (error) {
    console.log("update category by id error: ", error);
    return false;

  }
};
const searchCategoryByName = async (name) => {
  try {
    return await CatagoryModel.find({
      name: { $regex: name, $options: 'i' }

    });
  } catch (error) {
    console.log("find category by id error: ", error);
  }
}
module.exports = { addNewCategory, getAllCategory, deleteCategoryById, updateCategoryById, searchCategoryByName }