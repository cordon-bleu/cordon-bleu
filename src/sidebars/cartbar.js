import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Cart from '../components/cart/cart'
import shoppingcart from "../images/shopping-cart-4.png";


export default props => {
    return (
        <div>
            <div className='menu-2' >
                <Menu className='menu-item' disableAutoFocus width={375} right customBurgerIcon={<img className="shopping-cart" src={shoppingcart} alt="shopping cart" />} >{/* this should work for mobile to just cover the whole thing */}
                    <Cart />
                </Menu>
            </div>
        </div>
    );
};