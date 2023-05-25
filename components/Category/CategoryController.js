const CategoryService = require('./CategoryService');

const getAllCategory = async (page,size) =>{
    try {
        return await CategoryService.getAllCategory(page,size);
    } catch (error) {
        throw error;
    }
}

const deleteCategoryById = async (id) =>{
    try {
        return await CategoryService.deleteCategoryById(id);
    } catch (error) {
        throw error;
    }
}
 const addNewCategory=async (name)=>{
    try{
        return await CategoryService.addNewCategory(name);
    }catch(error)
    {
        return false;
    }
 }


 const updateCategoryById=async(id,name)=>{
    try {
        return await CategoryService.updateCategoryById(id,name);
    } catch (error) {
        return false;
        
    }
 }
 const searchCategoryByName=async(name)=>{
    try {
        return await CategoryService.searchCategoryByName(name);
        
    } catch (error) {
        console.log("search category by name error: ",error);
        
    }
 }
module.exports = {getAllCategory,deleteCategoryById,addNewCategory,updateCategoryById,searchCategoryByName};