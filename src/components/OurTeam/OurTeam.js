import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleMember from '../SingleMember/SingleMember';
import './OurTeam.css'

const OurTeam = () => {
    const [ teams, setTeams ] = useState([])
    const [cart, setCart]=useState([])
    
    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(response => response.json())
        .then(data => setTeams(data))
    }, [])
    
    const addMemberHandler = (team) => {
        const newData = [ ...cart, team ]
       setCart(newData)
    }
   
    return (
        <div className="container team">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            teams.map(team => <SingleMember
                                key={ team.id }
                                member={ team }
                                addHandler={addMemberHandler}
                            >
                                   
                               </SingleMember>)
                             }
                     </div>
                </div>
                <div className="col-md-3">
                     <Cart  cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;