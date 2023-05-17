const productService=require('./productServer');


const addNewProduct=async (name,price,quantity,date)=>{
    try{
        return await productService.addNewProduct(name,price,quantity,date);
    }catch(error)
    {
        return false;
    }
 }
const searchProductByName=async(name,quantity)=>{
    try {
        return await productService.searchProductByName(name,quantity);
        
    } catch (error) {
        console.log("search prudct by name error: ",error);
        
    }
 }
 const deleteProductById = async (id) =>{
    try {
        return await productService.deleteProductById(id);
    } catch (error) {
        throw error;
    }
}
 module.exports={addNewProduct, searchProductByName,deleteProductById};