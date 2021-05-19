import { React, useState, useEffect } from 'react';

const ConstrainedPoemRule = () => {

    const [ruleInfo, setRuleInfo] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/constrained-poems/create', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await response.json();
            setRuleInfo(body);
        }
        fetchData();
    }, [])

    return(    
        <>
        <br/><br/><br/><br/>

        <header>
            <h1>here is your rule:</h1>
        </header>
        
        <br/><br/>

        <section>
            {Object.values(ruleInfo).map((rule, key) =>
                <div key={key}>{rule}</div>)}
        </section>     
        </>
    )
}

export default ConstrainedPoemRule;
