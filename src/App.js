import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import AdminPage from './pages/admin/admin';
import HomePage from './pages/home/home';
import { routes } from './routes';
import { products } from './products';

const getProducts = async() => products;


class App extends Component {
  constructor(){
    super();

    this.state = {
      products: [],
      loading: true,
      openModalAddProduct: false
    };

    this.updateProduct = this.updateProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  async componentDidMount(){
    let products = await getProducts();
    this.setState({ products, loading: false });
  }

  updateProduct(newProduct){
    this.setState({
      products: this.state.products.map(oldProduct => {
        if(oldProduct.id === newProduct.id){
          newProduct.price = Number(newProduct.price);
          return newProduct;
        }
        return oldProduct;
      })
    })
  }

  removeProduct(id){
    let products = [...this.state.products];
    let index = products.findIndex(product => product.id === id);
    if(index === -1){
      return;
    }
    products.splice(index, 1);
    this.setState({ products });
  }

  addProduct(newProduct){
    let products = [...this.state.products];
    
    newProduct.price = Number(newProduct.price);
    newProduct.id = Math.floor(Math.random() * 1000)

    products.push(newProduct);
    this.setState({ products });
  }

  onOpenModal(){
    this.setState({ openModalAddProduct: true })
  }

  onCloseModal(){
    this.setState({ openModalAddProduct: false })
  }

  render() {
    if(this.state.loading){
      return <h1>Loading...</h1>
    }

    return (
      <div className="App">
        <Link to={routes.home}>Home</Link>
        /
        <Link to={routes.admin}>Admin</Link>
        <Route  
          path={routes.home} 
          render = {
            renderProps => 
            <HomePage 
              {...renderProps}
              productList={this.state.products}
            />
          }
        />
        <Route 
          path={routes.admin} 
          render={
            renderProps => 
              <AdminPage 
                {...renderProps} 
                productList={this.state.products} 
                updateProduct={this.updateProduct} 
                removeProduct={this.removeProduct}
                addProduct={this.addProduct}
                onOpenModal={this.onOpenModal}
                onCloseModal={this.onCloseModal}
                showModalAddProduct={this.state.openModalAddProduct}
              />
          } 
        />

      </div>
    );
  }
}

export default App;
