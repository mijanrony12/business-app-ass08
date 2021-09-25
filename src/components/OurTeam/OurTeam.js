import React, { useEffect, useState } from 'react';
import SingleMember from '../SingleMember/SingleMember';
import './OurTeam.css'

const OurTeam = () => {
    const [ teams, setTeams ] = useState([])
    
    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(response => response.json())
        .then(data => setTeams(data))
    },[])
    return (
        <div className="container team">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            teams.map(team => <SingleMember
                                key={ team.id }
                                member={team}
                            >
                                   
                               </SingleMember>)
                             }
                     </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default OurTeam;