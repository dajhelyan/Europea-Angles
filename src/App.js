// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import Home from './views/Home';
import Products from './views/Products';
import Sale from './views/Sale';
import ProductDetail from './views/product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* 
      <ItemListContainer/> */}
      <Router>
      <NavBar />
        <Switch>
          <Route
          exact
            path='/'
          >
            <Home/>
          </Route>
          <Route
          exact
            path='/products'
          >
            <Products/>
          </Route>
          <Route
          exact
            path='/product/detail'
          >
            <ProductDetail/>
          </Route>
          <Route
          exact
            path='/sale'
          >
            <Sale/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
