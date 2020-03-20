import React, { Component } from 'react'
import Title from '../Title'
import CartColum from './CartColum'
import EmptyCart from './EmptyCom'
import Cartlist from './CartList'
import CartTotals from './CartTot'
import { ProdukConsumer } from "../../context";



export default class Cart extends Component {
    render() {
        return (
           <section>
               <ProdukConsumer >
                   {value => {
                       const {cart} = value;
                       if(cart.length>0) {
                           return (
                               <>
                               <Title name="your" title ="keranjang" />
                               <CartColum /> 
                               <Cartlist value={value}/>
                               <CartTotals value={value} />
                               </>
                           )
                       } else {
                           return ( <EmptyCart />)
                       }
                   }}
               </ProdukConsumer>
             
           </section>
        )
    }
}
