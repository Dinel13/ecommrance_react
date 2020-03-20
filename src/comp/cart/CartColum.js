import React from "react";

export default function CartColum() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">produk</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">nama produk</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">harga</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">jumlah</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
      </div>
    </div>
  );
}
