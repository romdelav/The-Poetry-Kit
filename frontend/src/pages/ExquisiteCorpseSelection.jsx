import {React, useState, useEffect} from 'react';

const ExquisiteCorpseSelection = () => {

    const [exquisiteCorpse, setExquisiteCorpse] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:4000/exquisite-corpses/select`, {
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
            Select a poem:
            {exquisiteCorpse.map((poem, key) =>
                <div key={key}>{poem.title}</div>
            )}
        </div>
    )
};

export default ExquisiteCorpseSelection;