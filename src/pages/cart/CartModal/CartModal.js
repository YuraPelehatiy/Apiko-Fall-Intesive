import React from 'react';
import Modal from 'react-responsive-modal';
import CartPage from '../cart';

const CartPageModal = ({ history }) => (
    <Modal open = {true} onClose={() => history.go(-1)}>
        <CartPage/>
    </Modal>
)

export default CartPageModal;