import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Product extends Component {
  addbasket = (product) => {
    var basket = this.props.basket;
    var setBasket = this.props.setBasket;

    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
      checkBasket.adet += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          img:product.img,
          adet: 1,
        },
      ]);
    }
  };
  render() {
    return (
      <div>
        <Container>
          <Row xs="4" className="row">
            {this.props.product.map((product) => (
              <Col className="mt-3" key={product.id}>
                <div
                  className="card"
                  style={{ width: "19rem", height: "29rem" }}
                >
                  <img src={product.img} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column ">
                    <h5 className="card-title mt-auto">{product.name}</h5>
                    <h5 className="card-text mt-auto">{product.price} TL</h5>
                    <a href={()=>false}
                      className="btn btn-success mt-auto"
                      onClick={() => this.addbasket(product)}
                    >
                      Sepete Ekle
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
