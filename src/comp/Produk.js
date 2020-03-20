import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import {ProdukConsumer} from '../context'

export default class Produk extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.produk;
    return (
      <Produkwrap className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProdukConsumer>
            {value => (
              <div
              className="img-container p-5"
              onClick={() => value.keDetail(id)}
            >
              <Link to="/detail">
                <img src={img} alt="jualan" className="card-img-top" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToKeranjang(id)
                  value.openModel(id)
                }}
              >
                {inCart ? (
                  <p className="text-capitalize mb-0" disabled>
                    incart
                  </p>
                ) : (
                  <i className="fas fa-cart-plus" />
                )}
              </button>
            </div>

            )}
          </ProdukConsumer>
          
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between ">
            <p className="align-text-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </Produkwrap>
    );
  }
}
//unutk menjaga type data dari data produk yang salah tulis
//catcing datan ybag
Produk.propTypes = {
    produk : PropTypes.shape({
        id : PropTypes.number,
        img : PropTypes.string,
        title : PropTypes.string,
        price : PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const Produkwrap = styled.div`
.card{
    border-color : transparent;
    transition: width 2s, height 2s;
}
.card-footer {
    background : transparent;
    border-top : transparent;
    transition: width 2s, height 2s;

}

&: hover {
    .card{
        border: 0.06rem solid rgba(0,0,0,0.3);
        box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer {
        background : rgba(247, 247,247);
    
    }

}
.img-container {
    position : relative;
    overflow : hidden;

}
.card-img-top{
    transition: all 1s linear;


}
.img-container:hover .card-img-top {
    transform : scale(1.2);

}
.cart-btn{
    position: absolute;
    bottom : 0;
    right : 2px;
    padding : 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    border-radius: 0.5rem 0 0 0;
    color : var(--mainWhite);
    font-size:1.4rem;
    transition: all 1s linear;

}
.cart-btn:hover {
    position: absolute;
    bottom : 0;
    right : 2px;
    background: var(--mainBlue);
    transform : scaleX(1.4);
    corsor : pointer:
}
`;
