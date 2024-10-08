const express = require("express")
const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require("../controller/user/userSignIn")
const userDetailsController = require("../controller/user/userDetails")
const authToken = require("../middleware/authToken")
const userLogOut = require("../controller/user/userLogOut")
const allUsers = require("../controller/user/allUsers")
const updateUser = require("../controller/user/updateUser")
const UploadProductController = require("../controller/product/uploadProduct")
const getProductController = require("../controller/product/getProduct")
const updateProductController = require("../controller/product/updateProduct")
const getCategoryProductOne = require("../controller/product/getCategoryProductOne")
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct")

router.post("/signup" , userSignUpController)
router.post("/signin" , userSignInController)
router.get("/user-details" ,authToken, userDetailsController)
router.get("/userLogout" ,userLogOut)
// admin- panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user" ,authToken, updateUser)
// product 
router.post("/upload-product",authToken, UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProductOne)
router.post("/category-product",getCategoryWiseProduct)


module.exports = router