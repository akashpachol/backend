import express from 'express'
const router = express.Router()

import { loginUserController, userRegisterController} from '../Controller/userController.js'
import { getCategoryController, postCategoryController, postSubCategoryController } from '../Controller/categoryController.js'
 



router.post("/register", userRegisterController)
router.post("/login", loginUserController)
router.route("/category")
  .get(getCategoryController)
  .post(postCategoryController);
router.post("/subCategory", postSubCategoryController)





export default router