const productModel=require('./productModel');
const searchProductByName=async(name,quantity)=>{
    try {
      return await productModel.find({name:{$regex:name,$options:'i'},
      quantity:{$gte:1200}
  
    }).sort({price:-1});
      
      
    } catch (error) {
      console.log("finr product by id error: ",error);
    }
   }
   const addNewProduct = async (name, price, quantity, date) => {
    try {

  
      const newProduct={
        name,price,quantity,date
      }
      const p=new productModel(newProduct);
      await p.save();
      return true;
  
    } catch (error) {
      console.log('add new product error: ', error);
      return false;
    }
  }
  const deleteProductById = async (id) => {
    try {
     
  
      await productModel.findByIdAndDelete(id);
      return true;
  
    } catch (error) {
      console.log('Delete product by id error: ', error);
      return false;
    }
  }
   module.exports={searchProductByName,addNewProduct,deleteProductById}