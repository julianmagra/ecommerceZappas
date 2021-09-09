const { Product, Order, User } = require('../models');

const createOrder = (req, res, next) => {
  const { userId } = req.params;

  Order.create({
    state: req.body.state,
    address: req.body.address
  })
  .then(orderCreated => {
    User.findOne({
      where: { id: userId }
    })
    .then(user => {
      user.addOrder(orderCreated)
      orderCreated.setUser(user)
      // console.log(Object.keys(Order.prototype));
      // console.log(Object.keys(User.prototype));
      user.save()
      orderCreated.save()
      res.send({
        msg: 'Order created',
      })
    })
  })
}

/* ¡¡¡ Solucionar problema de cantidad de productos en el carrito !!! */
const addProduct = (req, res, next) => {
  Order.findOne({
    where: { id: req.params.orderId }
  })
  .then(oneOrder => {
    Product.findOne({
      where: { id: req.body.productId }
    })
    .then(add => {
      oneOrder.addProduct(add);
      add.addOrder(oneOrder);
      // console.log(Object.keys(Order.prototype));
      // console.log(Object.keys(Product.prototype));
      oneOrder.save();
      add.save();
      res.send({
        msg: 'Add successfully',
      })
    })
  })
}

const removeProduct = (req, res, next) => {
  Order.findOne({
    where: { id: req.params.orderId }
  })
  .then(oneOrder => {
    Product.findByPk(req.body.productId)
    .then(product => {
      oneOrder.removeProduct(product)
      .then(remove => {
        console.log(remove)
        res.send({
          msg: 'deleted'
        })
      })
    })
    .catch(err => console.log(err))
    // console.log(Object.keys(Order.prototype));
    // Product.findOne({
    //   where: { id: req.body.productId }
    // })
  })
}

/* ¡¡¡ Funcion aun incompleta !!! */
const editCart = (req, res, next) => {
  Order.findOne({
    where: { id: req.params.orderId }
  })
  .then(oneOrder => {

  })
}


module.exports = {
  createOrder,
  addProduct,
  removeProduct,
  editCart
}