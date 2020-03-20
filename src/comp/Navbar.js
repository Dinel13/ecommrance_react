import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import styled from 'styled-components'
import  {ButtonContai } from './Button'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrap className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}

        <Link to="/">
          <img src={Logo} alt="logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link ">
              Jualan
            </Link>
          </li>
        </ul>
        <Link to="/keranjang" className="ml-auto">
            <ButtonContai>
                <span className="mr-2">
                <i className="fas fa-cart-plus">my cart</i>

                </span>
            </ButtonContai>
        </Link>
      </NavWrap>
    ); 
  }
}

const NavWrap = styled.nav `
background : var(--mainBlue);
.nav-link{
    color : var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform : capitalize;
}
`