import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './comp/Navbar'
import Detail from './comp/Detals'
import Cart from './comp/cart/Cart'
import Default from './comp/Default'
import ProdukList from './comp/ProdukList '
import {Switch, Route} from 'react-router-dom'
import Model from './comp/Model'

function App() {
  return (
   <div className="container">
     <Navbar />
     <Switch >
       <Route path="/" exact component={ProdukList} />
       <Route path="/detail" component={Detail} />
       <Route path="/keranjang" component={Cart} />
       <Route  component={Default} />
     </Switch>
     <Model />

       
   </div>
  );
}

export default App;
