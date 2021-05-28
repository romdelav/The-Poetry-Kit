import {React, useState, useEffect} from 'react';

const ConstrainedPoemHistory = () => {

    const [history, setHistory] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:4000/constrained-poems/history', {
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
            {Object.values(history).map((constrainedPoemHistory, key) =>
            <div key={key}>{constrainedPoemHistory.paragraph1}</div>)}
        </div>
    )
};

export default ConstrainedPoemHistory;