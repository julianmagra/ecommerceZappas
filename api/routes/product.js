const express = require('express')
const router = express.Router();

const { getOneProduct, postProduct, updateProduct, deleteProduct, postProductModel,getProductsBySearch} = require('../controllers/productControllers');

// returns all the products
// http://localhost:3001/api/product?all=false&category=&search=
router.get("/", getProductsBySearch)
router.get("/:productId", getOneProduct)
router.post("/", postProduct)
router.post("/:productId/addModel", postProductModel)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)


module.exports = router;