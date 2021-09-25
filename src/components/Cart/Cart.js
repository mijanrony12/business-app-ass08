import { faCoffee,faMale} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props
    // console.log(cart.name)
   
    const fullName = cart.map(carts => carts.name);
    
    const man = <FontAwesomeIcon icon={faMale} />
    const totalValue = (previousValue, currentValue) => previousValue + currentValue.salary;
    const totalCost= cart.reduce(totalValue,0)
    return (
        <div>
            <div className="cart">
                         <h3> <small>{ man}</small> Total Members</h3>
                        <h5>Added Member:- { cart.length }</h5>
                        <h5>Total Cost (TK):- { totalCost }</h5>
                
                <div>
                    <h5>FullName:</h5>
                        {
                            props.cart.map(pd => <li>{ pd.name}</li> )
                        }
                </div>
          </div>
        </div>
    );
};

export default Cart;