import React from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import T from 'prop-types';
import s from './ProductLink.module.css';
import { routes } from '../../routes';
import ActionButton from '../ActionButton/ActionButton';
import Counter from '../Counter/Counter';
import classNames from 'classnames/bind';

let cx = classNames.bind(s)

const ProductLink = ({ 
    title, 
    id, 
    image, 
    price,
    onActionButtonClick,
    actionButtonTitle,
    cart,
    count,
    increment,
    decrement,
}) => (
    <div className={cx({ProductLink: true, ProductLinkCart: cart})}>
        <div className={cx({LeftHandSide: cart})}>
            {cart && <Counter 
                        value={count} 
                        increment={increment} 
                        decrement={decrement} 
                        id={id} 
                    />
            }
            <Link 
                to={formatRoute(routes.product, {id})} 
                className={s.linkAnchor}
            >
                <div className={cx({ProductVisibleCart: cart})}>
                    <div>
                        <img src={image} alt={title} className={s.productImage} title={title}/>
                    </div>
                    <div>
                        <h3 className={s.productTitle}>
                            {title}
                        </h3>
                        <div className={s.productPrice}>
                            {price} грн
                        </div>
                    </div> 
                </div>
            </Link>
        </div>
        <ActionButton onClick={() => onActionButtonClick({id})}>{actionButtonTitle}</ActionButton>
    </div>
)

ProductLink.propTypes = {
    id: T.string.isRequired,
    title: T.string.isRequired,
    //image: T.string.isRequired,
    price: T.number.isRequired
}

export default ProductLink;