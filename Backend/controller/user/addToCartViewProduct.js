const addToCartModel = require("../../models/cartProduct");

const addToCartViewProduct= async(req,res)=>{
    try {
        const currentUser = req.userId
        const allProduct = await addToCartModel.find({
            userId : userId
        })
        res.json({
            data : allProduct,
            success : true,
            error : false
        })
        
    } catch (err) {
        res.status(400).json({
          message: err.message || err,
          error: true,
          success: false,
        });
      }
}
module.exports = addToCartViewProduct