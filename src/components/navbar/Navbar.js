import React, { Component } from "react";
import {

  Link
} from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <div >
        <ul>
          <li>
            <Link to="/">Para Harcama</Link>
          </li>
          <li className="active" style={{ float: "right" }}>
            <Link to="/cart">Sepet: {this.props.basket.length}</Link>
              
            
          </li>

          <li style={{ float: "right", marginRight: 10 }}>
            <a className="active" href={()=>false}>
              Bakiye: {this.props.money ? this.props.money.toFixed(2) : 0} TL
            </a>
          </li>
        </ul>
        

</div>
     
    );
  }
}
