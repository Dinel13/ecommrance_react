import React, { Component } from "react";
import Produk from "./Produk";
import Title from "./Title";
import { ProdukConsumer } from "../context";

export default class ProdukList extends Component {
 
  render() {
    return (
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Jualan" />
          <div className="row">
            <ProdukConsumer>
              {value => {
                return value.produk.map(prod => {
                  return <Produk key={prod.id} produk={prod} />;
                });
              }}
            </ProdukConsumer>
          </div>
        </div>
      </div>
    );
  }
}
