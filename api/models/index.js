const User = require("./User")
const Category = require("./Category")
const Order = require("./Order")
const Product = require("./Product")
const ProductModel = require("./ProductModel")
const Raiting = require("./Raiting")
const Review = require("./Review")
const Role = require("./Role")
const Tag = require("./Tag")

// relation user to role
Role.hasMany(User)
User.belongsTo(Role)
// relation user to orders
User.hasMany(Order)
Order.belongsTo(User)
// relation user to reviews
User.hasMany(Review)
Review.belongsTo(User)
// relation order to products
Order.belongsToMany(Product, {through: "order-product",as: "product"})
Product.belongsToMany(Order, {through: "order-product",as: "order"})
// relation produts to reviews
Product.hasMany(Review)
Review.belongsTo(Product)
// relation products to categories
Category.belongsToMany(Product, {through: "product-category",as: "product"})
Product.hasOne(Category, {through: "product-category",as: "category"})
// relation products to raiting
Raiting.belongsToMany(Product, {through: "product-raiting",as: "product"})
Product.belongsToMany(Raiting, {through: "product-raiting",as: "raiting"})
// relation products to productModels
Product.hasMany(ProductModel)
ProductModel.belongsTo(Product)
// relation products to categories
Tag.belongsToMany(Product, {through: "product-tag",as: "product"})
Product.belongsToMany(Tag, {through: "product-tag",as: "tag"})


module.exports = {User,Category,Order,Product,ProductModel,Raiting,Review,Role,Tag};