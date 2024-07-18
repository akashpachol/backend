import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true,
      },
    name: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
      },
      image: {
        type: [String],
    },
    variants:[
        {
           ram:String,
          price: String,
          stock: Number,
        },
      ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
