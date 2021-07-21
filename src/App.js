// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import Home from './views/Home';
import Products from './views/Products';
import Cart from './views/Cart';
import ProductDetail from './views/product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/itemDetailContainer';
function App() {
  return (
    <div className="App">
      {/* 
      <ItemListContainer/> */}
      <Router>
      <NavBar />
        <Switch>
          {/* <Route
          exact
            path='/'
          >
            <Home/>
          </Route> */}
          <Route
          exact
            path='/'
          >
            <Products/>
          </Route>
          <Route
          exact
            path='/product/detail/:id'
          >
            <ItemDetailContainer/>
          </Route>
          <Route
          exact
            path='/category/:id'
          >
            <ItemListContainer/>
          </Route>
          <Route
          exact
            path='/cart'
          >
            <Cart/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
