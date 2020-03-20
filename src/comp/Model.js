import React, { Component } from "react";
import styled from "styled-components";
import { ProdukConsumer } from "../context";
import { ButtonContai } from "./Button";
import { Link } from "react-router-dom";

export default class Model extends Component {
  render() {
    return (
      <ProdukConsumer>
        {value => {
          const { modelOpan, closeModel } = value;
          const { img, title, price } = value.modalProduk;
          if (!modelOpan) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="model"
                       className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                        <h5>item add to the cart </h5>
                        {/* agar gambar tidak keluar dari tempat */}
                        <img src={img} className="img-fluid" alt="gambar" />
                        <h5>{title}</h5>
                        <h5 className="text-muted">Harga : $ {price}</h5>
                        <Link to="/">
                          <ButtonContai onClick={() => closeModel()}>
                            belanja
                          </ButtonContai>
                        </Link>
                        <Link to="/keranjang">
                          <ButtonContai cart onClick={() => closeModel()}>
                            ke keranjang
                          </ButtonContai>
                        </Link>
                      </div>
                    
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProdukConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #model {
    background: var(--mainWhite);
  }
`;
