import React, { useEffect, useState } from 'react';
import './OurTeam.css'

const OurTeam = () => {
    const [ teams, setTeams ] = useState([])
    
    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(response => response.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default OurTeam;