import React, { Component } from "react";
import { ProdukConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContai } from "./Button";

export default class Detals extends Component {
  render() {
    return (
      <ProdukConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduk;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img className="img-fluid" src={img} alt="gambar produk" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                      price : <span>$</span> {price}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product : 
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div >
                      <Link to='/' >
                          <ButtonContai >
                              Kembali ke produk
                          </ButtonContai>
                      </Link>
                      <ButtonContai disabled={inCart ? true : false} onClick={()=>{
                          value.addToKeranjang(id)
                          value.openModel(id)
                      }}>
                          {inCart ? "IN CART "      : "add to cart"}
                      </ButtonContai>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProdukConsumer>
    );
  }
}
