const express = require('express')
const router = express.Router();

const { getAllCategorys, getOneCategory,postCategory, updateCategory, deleteCategory} = require('../controllers/categoryControllers');


router.get("/", getAllCategorys)
router.get("/:id", getOneCategory)
router.post("/", postCategory)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)

module.exports = router;