import React from 'react';
import './Member.css'
const Member = (props) => {
    const {img, name,designation}=props.member
    return (
        <div className="member-details">
               <div>
                     <img src={img} alt="" />
            </div>
            <div className="detail">
                <h6>{ name} <i class="far fa-check-circle"></i></h6>
                <h6>{ designation}</h6>
            </div>
        </div>
    );
};

export default Member;