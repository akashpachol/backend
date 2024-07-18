import mongoose, { Schema } from "mongoose";

const subCategorySchema = new Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
export default SubCategory;
