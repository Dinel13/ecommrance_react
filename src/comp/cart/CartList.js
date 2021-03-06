import React from 'react'
import Cartitem from './CartItem'

export default function CartList({ value }) {
    const { cart } = value
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <Cartitem key={item.id} item={item} value={value} />
            })}

        </div>
    )
}
