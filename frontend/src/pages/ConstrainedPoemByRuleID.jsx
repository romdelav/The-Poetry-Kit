import {React, useState, useEffect} from 'react';

const ConstrainedPoemByRuleID = ({match}) => {

    const ruleID = match.params.ruleID;

    const [constrainedPoem, setConstrainedPoem] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:4000/constrained-poems/rules/${ruleID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setConstrainedPoem(body);
        }
        fetchData();
    }, [ruleID])

    return (    
        <div>
            {constrainedPoem.map((poem, key) =>
            <div key={key}>{poem.title}<br/>{poem.text}</div>)}
        </div>
    )
};

export default ConstrainedPoemByRuleID;
