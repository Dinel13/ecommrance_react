import React from "react";
import { Link } from "react-router-dom";
import Pb from "./paypalButton";

export default function CartTot({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-1- mt-2 ml-sm-5 ml-md-auto clo-sm-8 text-capitalize text-center">
            <Link to="/">
              <button
                className="btn btn-outline-denger text-uppercase mb-3 px-5 "
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">Subtotoal :</span>
              <strong> $ {cartSubTotal} </strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong> $ {cartTax} </strong>
            </h5>
            <h5>
              <span className="text-title">Total :</span>
              <strong> $ {cartTotal} </strong>
            </h5>
            <Pb total={cartTotal} history={history} clearCart={clearCart} />
          </div>
        </div>
      </div>
    </>
  );
}
