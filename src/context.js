import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProdukContext = React.createContext();
//Provider
//Consumer
//2.39

class ProdukProvider extends Component {
  state = {
    produk: [],
    detailProduk: detailProduct,
    cart: [],
    modelOpan: false,
    modalProduk: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  setProduk = () => {
    let tempProduk = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProduk = [...tempProduk, singleItem];
    });
    this.setState(() => {
      return { produk: tempProduk };
    });
  };

  getItem = id => {
    const produk = this.state.produk.find(item => item.id === id);
    return produk;
  };

  keDetail = id => {
    const produk = this.getItem(id);
    this.setState(() => {
      return { detailProduk: produk };
    });
  };
  addToKeranjang = id => {
    let tempProduk = [...this.state.produk];
    const index = tempProduk.indexOf(this.getItem(id));
    const produk = tempProduk[index];
    produk.inCart = true;
    produk.count = 1;
    const price = produk.price;
    produk.total = price;
    this.setState(
      () => {
        return { produk: tempProduk, cart: [...this.state.cart, produk] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  componentDidMount() {
    this.setProduk();
  }

  opanModel = id => {
    const produk = this.getItem(id);
    this.setState(() => {
      return { modalProduk: produk, modelOpan: true };
    });
  };

  closeMOdel = () => {
    this.setState(() => {
      return { modelOpan: false };
    });
  };
  increment = id => {
    let tempCart = [...this.state.cart]
    const selctedproduk = tempCart.find(item => item.id == id)
    const index = tempCart.indexOf(selctedproduk);
    const prosduk = tempCart[index]
    prosduk.count = prosduk.count +1
    prosduk.total =prosduk.count * prosduk.price
    this.setState(()=>{
      return {
        cart : [...tempCart]
      }
    }, ()=> {
      this.addTotal()
    })
  };
  decrement = id => {
    let tempCart = [...this.state.cart]
    const selctedproduk = tempCart.find(item => item.id== id)
    const index = tempCart.indexOf(selctedproduk);
    const prosduk = tempCart[index]
    if(prosduk.count > 0 ) {
      prosduk.count = prosduk.count -1
      prosduk.total =prosduk.count * prosduk.price
      this.setState(()=>{
        return {
          cart : [...tempCart]
        }
      }, ()=> {
        this.addTotal()
      })
    } else {
      this.removeItem(id)
    }
 
  };
  removeItem = id => {
    let tempProduk = [...this.state.produk];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProduk.indexOf(this.getItem(id));
    let removeProduk = tempProduk[index];
    removeProduk.inCart = false;
    removeProduk.count = 0;
    removeProduk.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          produk: [...tempProduk]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  clearCart = id => {
    this.setState(() => {
      return (
        {
          cart: []
        },
        () => {
          this.setProduk();
          this.addTotal();
        }
      );
    });
  };
  addTotal = () => {
    let subtotoal = 0;
    this.state.cart.map(item => (subtotoal += item.total));
    const temTax = subtotoal * 0.1;
    const tax = parseFloat(temTax.toFixed(2));
    const total = subtotoal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subtotoal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    return (
      <ProdukContext.Provider
        value={{
          ...this.state,
          keDetail: this.keDetail,
          addToKeranjang: this.addToKeranjang,
          openModel: this.opanModel,
          closeModel: this.closeMOdel,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProdukContext.Provider>
    );
  }
}

const ProdukConsumer = ProdukContext.Consumer;

export { ProdukProvider, ProdukConsumer };
