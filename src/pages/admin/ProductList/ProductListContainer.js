import React from 'react';
import ProdutcListComponent from './ProdutcListComponent';
import * as Api from '../../../api/Api';

class ProductListContainer extends React.Component {
    constructor(){
        super();
    
        this.state = {
          products: [],
          loading: true,
          modal: false
        };
    }

    async componentDidMount(){
        let [ productsData ] = await ProductListContainer.fetchData();

        this.setState({ 
            products: productsData.data, 
            loading: false 
        });
    }

    updateProductModal(id, e){
        e.preventDefault();
        
    }

    async removeProduct(id, e){
        e.preventDefault();
        await ProductListContainer.removeDataById(id);
    }

    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }

        return(
            <ProdutcListComponent
                {...this.props}
                {...this.state}
                updateProductModal = {this.updateProductModal}
                removeProduct = {this.removeProduct}
            />
        );
    }
}

ProductListContainer.fetchData = () => Promise.all([
    Api.AdminProducts.fetchProducts(),
])

ProductListContainer.createData = (product) => Promise.all([
    Api.AdminProducts.createProduct(product),
])

ProductListContainer.getDataById = (id) => Promise.all([
    Api.AdminProducts.getProductsById(id),
])

ProductListContainer.removeDataById = (id) => Promise.all([
    Api.AdminProducts.removeProductById(id),
])

export default ProductListContainer;