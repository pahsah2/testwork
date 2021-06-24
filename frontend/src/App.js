import React from 'react'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import { Container} from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import HomeScreen from './screen/HomeScreen'
import DashboardScreen from './screen/DashboardScreen'
import AddProductScreen from './screen/AddProductScreen'
import AddShopScreen from './screen/AddShopScreen'
import EditProductScreen from './screen/EditProductScreen'
import EditShopScreen from './screen/EditShopScreen'
import DetailProductScreen from './screen/DetailProductScreen'
import DetailShopScreen from './screen/DetailShopScreen'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/shop/add" component={AddShopScreen} />
        <Route path="/product/add" component={AddProductScreen} />
        <Route path="/shop/:id/edit"  component={EditShopScreen} />
        <Route path="/product/:id/edit" component={EditProductScreen} />
        <Route path="/shop/:id" component={DetailShopScreen} />
        <Route path="/product/:id" component={DetailProductScreen} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
