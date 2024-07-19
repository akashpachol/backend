import asyncHandler from "express-async-handler";
import Category from "../Modal/Category.js";
import SubCategory from "../Modal/subCategory.js";


// category post
export const postCategoryController = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const categoryData = await Category.findOne({ name });

  if (categoryData) {
    res.status(404).json({ message: "category already exist" });
    return;
  }

  const category = await Category.create({
    name,
  });

  res.status(200).json({ message: " category created ", status: "success" });
});

// category get
export const getCategoryController = asyncHandler(async (req, res) => {
  const categoryData = await Category.find();

  res
    .status(200)
    .json({
      message: " category created ",
      status: "success",
      data: categoryData,
    });
});

// sub category post
export const postSubCategoryController = asyncHandler(async (req, res) => {
  const { name, category } = req.body;

  const subCategoryData = await SubCategory.findOne({ name });

  if (subCategoryData) {
    res.status(404).json({ message: "sub category  already exist" });
    return;
  }

  const newSubCategory = await SubCategory.create({
    name,
    category,
  });

  res
    .status(200)
    .json({ message: " sub category created ", status: "success" });
});

// subcategory get

export const getSubCategoryController = asyncHandler(async (req, res) => {

  const {category}=req.params

  const categoryData = await SubCategory.find({category});

  res
    .status(200)
    .json({
      message: " category created ",
      status: "success",
      data: categoryData,
    });
});