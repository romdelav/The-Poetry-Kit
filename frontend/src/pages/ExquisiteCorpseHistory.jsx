import {React, useState, useEffect} from 'react';

const ExquisiteCorpseHistory = () => {

    const [history, setHistory] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:4000/exquisite-corpses/history', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setHistory(body);
        }
        fetchData();
    }, [])
    return (    
        <div>
            <br/><br/><br/><br/>
            History
            <br/>
            {Object.values(history).map((exquisiteCorpseHistory, key) =>
            <div key={key}>{exquisiteCorpseHistory.paragraph1}</div>)}
        </div>
    )
};

export default ExquisiteCorpseHistory;