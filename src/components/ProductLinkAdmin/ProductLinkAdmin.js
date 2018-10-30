import React from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import T from 'prop-types';
import { routes } from '../../routes';
import s from './ProductLinkAdmin.module.css';

const ProductLinkAdmin = ({ 
    title, 
    id,
    showModalToUpdateProduct,
    showModalToRemoveProduct
}) => (
    <div className={s.ProductLinkAdmin}>
        <Link to={formatRoute(routes.adminProduct, {id})} >
            {title}
            <button onClick={(e) => showModalToUpdateProduct(id, e)}>Edit</button>
            <button onClick={(e) => showModalToRemoveProduct(id, e)}>Remove</button>
        </Link>
    </div>
)

ProductLinkAdmin.propTypes = {
    id: T.string.isRequired,
    title: T.string.isRequired
}

export default ProductLinkAdmin;