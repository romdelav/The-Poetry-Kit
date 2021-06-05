import {React, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

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
        <div style={{textAlign: 'center'}}>
            Select a poem:
            <br/><br/>
            {exquisiteCorpse.map((poem) =>
            <Link to={`/exquisite-corpses/select/${poem.poemID}`} key={poem.poemID}>{poem.title}</Link>
            )}
        </div>
    )
};

export default ExquisiteCorpseSelection;