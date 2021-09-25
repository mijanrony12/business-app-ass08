import { faCoffee,faMale} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props
    // console.log(cart.name)
   
    for (const carts of cart)
    {
       
    }
    const man = <FontAwesomeIcon icon={faMale} />
    const totalValue = (previousValue, currentValue) => previousValue + currentValue.salary;
    const totalCost= cart.reduce(totalValue,0)
    return (
        <div className="cart">
            <h3> <small>{ man}</small> Total Members</h3>
            <h5>Added Member:- { cart.length }</h5>
            <h5>Total Cost (TK):- { totalCost }</h5>
            <p>name:-{ }</p>
            <ul>
                <li>{}</li>
            </ul>
        </div>
    );
};

export default Cart;