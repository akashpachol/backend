
import Product from "../Modal/product.js";
import expressAsyncHandler from "express-async-handler";


// product post
export const postProductController = expressAsyncHandler(
  async (req, res) => {
    const {name,category,subCategory,description,price,stock,ram,image} = req.body

    if(!name||!category||!subCategory||!description||!price||!stock||!ram||!image){
      res.status(404).json({message: "correct the details"})

    }
    
    const productData = await Product.findOne({name})

    if(productData) {
      res.status(404).json({message: "product already exist"})
      return
    }
 
    const newproduct = await Product.create({
        name,
        category,
        subCategory,
        description,
        variants:[{price,stock,ram}],
        image:image.map((data)=>data.url)

   
      });
  
    res.status(200).json({ message: " product created " ,status:"success" });
  }
)

// product get

export const getProductController = expressAsyncHandler(async (req, res) => {
  const producttData = await Product.find();

  res
    .status(200)
    .json({
      message: "get all product",
      status: "success",
      data: producttData,
    });
});

// get single product get
export const getProductDetailsController = expressAsyncHandler(async (req, res) => {
console.log(req.params.id);
  const {id}=req.params

  if(!id){
    res.status(404).json({message: "product is not fount"})
    return
  }
  const producttData = await Product.findById(id).populate('category').populate('subCategory');

  res
    .status(200)
    .json({
      message: "get product details",
      status: "success",
      data: producttData,
    });
});


// product update
export const updateProductController = expressAsyncHandler(
  async (req, res) => {
    const {name,category,subCategory,description,price,stock,ram,image} = req.body

    if(!name||!category||!subCategory||!description||!price||!stock||!ram||!image){
      res.status(404).json({message: "correct the details"})

    }
    
   
 
    const newproduct ={
        name,
        category,
        subCategory,
        description,
        variants:[{price,stock,ram}],
        image:image.map((data)=>data.url)

   
      }

     const data= await Product.findByIdAndUpdate(id, newproduct, { new: true });
  
    res.status(200).json({ message: " product updateed" ,status:"success" });
  }
)

// filter product get
export const filterProductController = expressAsyncHandler(
  async (req, res) => {
    
    const {category,subCategory}=req.query
let productData;
if(!category){
  res.status(404).json({message: "correct the details"})

}
if(!subCategory){
  productData = await Product.find({category});


}
let data={subCategory,category}

productData = await Product.find(data);

    
  
    res.status(200).json({ message: "filter product" ,status:"success",data:productData });
  }
)




























