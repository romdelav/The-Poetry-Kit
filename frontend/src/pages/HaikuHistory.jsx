import {React, useState, useEffect} from 'react';

const HaikuHistory = () => {

    const [history, setHistory] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:4000/haikus/history', {
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
            Haiku History
            <br/>
            {Object.values(history).map((haikuHistory, key) =>
            <div key={key}>{haikuHistory.paragraph1}</div>)}
        </div>
    )
};

export default HaikuHistory;