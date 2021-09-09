import React from "react";
import Main from './components/views/Main'
import MyCart from './components/views/MyCart'
import SingleProduct from './components/views/SingleProduct'
import {Switch, Route, Redirect} from 'react-router-dom'
import UserAuth from './components/views/UserAuth'

const App = () => {

  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/cart" component={MyCart}/>
      <Route path="/product/:id" component={SingleProduct}/>
      {/* <Route path="/product/:id/reviews"/> {Esta ruta no se si existiria o las reviews serian parte del product/:id} */}
      <Route path="/register" component={UserAuth}/>
      <Route path="/login" component={UserAuth}/>
      <Route path="/users"/>
      <Route path="/users/:id"/>
      <Redirect from='*' to='/'/>
    </Switch>
  )
};

export default App;
