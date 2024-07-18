
import asyncHandler from "express-async-handler";
import Product from "../Modal/product";



export const postCategoryController = asyncHandler(
  async (req, res) => {
    const {name} = req.body
    
    const productData = await Product.findOne({name})

    if(productData) {
      res.status(404).json({message: "category already exist"})
      return
    }
 
    const category = await Product.create({
        name,
   
      });
  
    res.status(200).json({ message: " category created " ,status:"success" });
  }
)


































