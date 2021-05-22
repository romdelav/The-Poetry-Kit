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
        <br/><br/><br/><br/><br/><br/>

        <section>
            
            {Object.values(ruleInfo).map((rule, key) =>
            <div key={key} className="rule-style">
                <h2>Rule</h2>
                {rule}
                <br/><br/>
            </div>)}
        </section> 

        <br/><br/><br/><br/>

        <section className="input-field">
            <textarea placeholder="Your poem..."></textarea>
        </section>    
        </>
    )
}

export default ConstrainedPoemRule;
