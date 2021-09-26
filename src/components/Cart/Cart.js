import { faCoffee,faMale} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Member from '../Member/Member';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props
    const man = <FontAwesomeIcon icon={ faMale } />

    // reducing for total
    const totalValue = (previousValue, currentValue) => previousValue + currentValue.salary;
    const totalCost = cart.reduce(totalValue, 0)
    
    return (
        <div>
            {/* show cart */ }
            
            <div className="cart">
                         <h3> <small>{ man}</small> Total Members</h3>
                        <h5>Added Member:- { cart.length }</h5>
                        <h5>Total Cost (TK):- { totalCost }</h5>
                
                <div>
                    {/* using map for each name */ }
                    
                    <h5>FullName:</h5>
                        {
                            props.cart.map(item => <Member member={item}></Member> )
                        }
                </div>
                <button>Clear</button>
          </div>
        </div>
    );
};

export default Cart;