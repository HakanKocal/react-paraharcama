import {useState, useEffect} from 'react'
import Navbar from './components/navbar/Navbar';
import Product from './components/product/Product';
import productList from './products.json'
import { Route, Switch } from "react-router-dom";
import Cart from './components/cart/Cart'


function App() {
  const [money, setMoney] = useState(2880);
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
      setTotal(
       basket.reduce((acc, item)=>{
         return acc + (item.adet * (productList.find(product => product.id === item.id).price))
       },0))
  }, [basket])
  return (
    <div className="App">
       <Navbar money={money} basket={basket}/>
       <Switch>
         <Route exact path="/">  <Product  product={productList} basket={basket} setBasket={setBasket}/></Route>
         <Route exact path="/cart"><Cart money={money} setMoney={setMoney} basket={basket} setBasket={setBasket} total={total}/></Route>
      </Switch>
    </div>
  );
}
export default App

