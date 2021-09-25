import React from 'react';
import './SingleMember.css'
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SingleMember = (props) => {

     //   destructuring object
    const { name, owner, designation, age, salary, img } = props.member;

    // icon
    const man = <FontAwesomeIcon icon={faUser} />
    return (
        
            //   i am showing every member
            <div className="col-md-4">
                <div className="member">
                            <div className="member">
                           <img src={img} alt="" />
                   </div>
            <div>
                <h6>Name:- { name}</h6>           
                    <table>    
                    <tr>
                        <td>Owner:-</td>
                        <td>{ owner}</td>
                    </tr>
                    <tr>
                        <td>Designation:-</td>
                        <td>{ designation}</td>
                    </tr>
                    <tr>
                        <td>Age:-</td>
                        <td>{ age}</td>
                    </tr>
                    <tr>
                        <td>Salary:-(TK)
                        </td>
                        <td>{ salary}</td>
                    </tr>
                    </table>

                    {/* get data */}
                    <button onClick={ () => props.addHandler(props.member) }> <small>{ man}</small> Add Member</button>
                   </div>
                 </div>
              </div>
       
    );
};

export default SingleMember;