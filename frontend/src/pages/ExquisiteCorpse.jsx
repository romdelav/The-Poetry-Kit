import {React, useState, useEffect} from 'react';

const ExquisiteCorpse = () => {

    const [exquisiteCorpse, setExquisiteCorpse] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:4000/exquisite-corpses/:poemID`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setExquisiteCorpse(body);
        }
        fetchData();
    }, [])

    return (    
        <div>
            
        </div>
    )
};

export default ExquisiteCorpse;