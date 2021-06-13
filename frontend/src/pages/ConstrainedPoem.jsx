import {React, useState, useEffect} from 'react';

const ConstrainedPoem = ({match}) => {

    const poemID = match.params.poemID;

    const [constrainedPoem, setConstrainedPoem] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:4000/constrained-poems/${poemID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setConstrainedPoem(body);
        }
        fetchData();
    }, [poemID])

    return (    
        <div>
            {Object.values(constrainedPoem) && Object.values(constrainedPoem).map((poem, key) =>
            <div key={key}>{poem}</div>)}
        </div>
    )
};

export default ConstrainedPoem;
