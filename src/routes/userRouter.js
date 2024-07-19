import express from 'express'
const router = express.Router()

import { loginUserController, userRegisterController} from '../Controller/userController.js'
import { getCategoryController, getSubCategoryController, postCategoryController, postSubCategoryController } from '../Controller/categoryController.js'
import { filterProductController, getProductController, getProductDetailsController, postProductController, updateProductController } from '../Controller/productController.js'
import jwtTokenVerification from '../middleware/jwtmiddleware.js'
 



router.post("/register", userRegisterController)
router.post("/login", loginUserController)
router.route("/category")
.all(jwtTokenVerification)
  .get(getCategoryController)
  .post(postCategoryController);
router.post("/subCategory",jwtTokenVerification, postSubCategoryController)
router.get("/subCategory/:category",jwtTokenVerification, getSubCategoryController)

router.get("/productDetails/:id",jwtTokenVerification, getProductDetailsController)
router.get("/filterProduct",jwtTokenVerification, filterProductController)


router.route("/product")
.all(jwtTokenVerification)
  .get(getProductController)
  .post(postProductController)
  .put(updateProductController)





export default router