import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import {FaTimes,FaArrowLeft} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default class Cart extends Component {
  removeFromCart=(product)=>{
    var basket = this.props.basket;
    let newCart=basket.filter((item)=>item.id!==product.id)
    this.props.setBasket(newCart)
  }
  buyCart=()=>{
    let newMoney=(this.props.money-this.props.total)
    this.props.setMoney(newMoney);
    this.props.setBasket([]);
  }
  renderCart(){
    return (
      <Container>
          <h2 className="sepet">SEPET</h2>

          {this.props.basket.map((cart) => (
            <div className="cart " key={cart.id}>
              <Row
                xs={2.4} 
                className="h-100 justify-content-center align-items-center"
              >
                <Col >
                  <img src={cart.img} className="card-img-top img" alt="..." />
                </Col>
                <Col>
                  <span className="cart-name">{cart.name}</span>
                </Col>
                <Col>{cart.price} ₺</Col>
                <Col>{cart.adet}</Col>
                <Col><span style={{color:'red'}} onClick={()=>this.removeFromCart(cart)}><FaTimes/></span></Col>
              </Row>
            </div>
          ))}
          <div className="price-cart">
          <div className="total">
            <div className="total-price">
            <div className="input-group">
              <input type="text" placeholder="Kupon Giriniz"></input>
            </div>
            <button type="button" className="btn button-coupon">Uygula</button>
            </div>
            <span> {this.props.total?'Price '+this.props.total.toFixed(2)+' ₺':'Sepetiniz Boş'}</span>
          </div>
          </div>
          <div className="buy">
          <button type="button" className="btn buy-button" onClick={()=>this.buyCart()} >Satın Al</button>
          </div>
        </Container>
    )
  }
  emptyCart(){
    return (
      <Container>
        <div className="cart" style={{height:'36rem'}}>
        <Row className="h-100 align-items-center justify-content-center">
          <Col><h2>Sepetiniz Boş</h2><Link to="/" style={{color:"black"}}><h3><FaArrowLeft/>Alışverişe Dön</h3></Link></Col>
          </Row>
        </div>
      </Container>
    )
  }

  render() {
    return (
      <div>
        {/* <Container>
          <h2 className="sepet">SEPET</h2>

          {this.props.basket.map((cart) => (
            <div className="cart " key={cart.id}>
              <Row
                xs={2.4}
                className="h-100 justify-content-center align-items-center"
              >
                <Col>
                  <img src={cart.img} className="card-img-top img" alt="..." />
                </Col>
                <Col>
                  <span className="cart-name">{cart.name}</span>
                </Col>
                <Col>{cart.price} ₺</Col>
                <Col>{cart.adet}</Col>
                <Col><span style={{color:'red'}} onClick={()=>this.removeFromCart(cart)}><FaTimes/></span></Col>
              </Row>
            </div>
          ))}
          <div className="price-cart">
          <div className="total">
            <div className="total-price">
            <div className="input-group">
              <input type="text" placeholder="Kupon Giriniz"></input>
            </div>
            <button type="button" className="btn button-coupon">Uygula</button>
            </div>
            <span> {this.props.total?'Price '+this.props.total.toFixed(2)+' ₺':'Sepetiniz Boş'}</span>
          </div>
          </div>
          <div className="buy">
          <button type="button" className="btn buy-button" onClick={()=>this.buyCart()} >Satın Al</button>
          </div>
        </Container> */}
        {this.props.basket.lenght>0?this.renderCart():this.emptyCart()}
      </div>
    );
  }
}
