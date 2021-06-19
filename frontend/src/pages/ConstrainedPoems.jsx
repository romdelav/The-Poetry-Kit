import {React, useState, useEffect} from 'react';

const ConstrainedPoems = () => {

    const [constrainedPoem, setConstrainedPoem] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:4000/constrained-poems/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setConstrainedPoem(body);
        }
        fetchData();
    }, [])

    return (    
        <div>
            {constrainedPoem.map((poem, key) =>
            <div key={key}>{poem.description}<br/>{poem.title}<br/>{poem.text}</div>)}
        </div>
    )
};

export default ConstrainedPoems;
