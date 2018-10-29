import React from 'react';
import ModalAddProductComponent from './ModalAddProductComponent';
import { productPropTypes } from '../../schemes/product';
import T from 'prop-types'
import * as Api from '../../api/Api'
class ModalAddProductContainer extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            title: '',
            description: '',
            image: '',
            price: '',
            openModal: false
        };

        this.onSubmitAdd = this.onSubmitAdd.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    async onSubmitAdd(e){
        e.preventDefault();
        let newProduct = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price
        }
        await ModalAddProductContainer.createData(newProduct);
        this.onCloseModal();
    }

    onChangeField(name){ 
        return (e) => {
            this.setState({
                [name]: e.target.value
            });
        }
    }

    onOpenModal(){
        this.setState({ openModal: true })
    }

    onCloseModal(){
        this.setState({ openModal: false })
    }

    render(){
        return(
            <ModalAddProductComponent 
                {...this.state} 
                onChangeField = {this.onChangeField}
                onSubmitAdd = {this.onSubmitAdd}
                onClose = {this.onCloseModal}
                onOpen = {this.onOpenModal}
                openModal = {this.state.openModal}
            />          
        );
    }
}

ModalAddProductContainer.createData = (product) => Promise.all([
    Api.AdminProducts.createProduct(product)
]); 

ModalAddProductContainer.propTypes = {
    //productList: T.arrayOf(productPropTypes),
    //addProduct: T.func.isRequired
};

export default ModalAddProductContainer;