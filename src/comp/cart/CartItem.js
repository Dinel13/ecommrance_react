import React, { Component } from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="jualan"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none"> jualan : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none"> Harga: </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
            <div>
          <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
            -
          </span>
          <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
            {count}
          </span>
          <span className="btn btn-black mx-1" onClick={() => increment(id)}>
            +
          </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-item" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>{" "}
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>Total item : RP {total}</strong>
      </div>
    </div>
  );
}
