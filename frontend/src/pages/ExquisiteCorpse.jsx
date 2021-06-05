import {React, useState, useEffect} from 'react';

const ExquisiteCorpse = ({match}) => {

    const poemID = match.params.poemID;

    const [exquisiteCorpse, setExquisiteCorpse] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:4000/exquisite-corpses/select/${poemID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setExquisiteCorpse(body);
        }
        fetchData();
    }, [poemID])

    return (    
        <div>
            {exquisiteCorpse.map((poem) =>
            <div key={poem.exquisiteCorpseID}>{poem.exquisiteCorpseLine}</div>)}
        </div>
    )
};

export default ExquisiteCorpse;