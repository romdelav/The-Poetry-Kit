import { React, useState, useEffect } from 'react';

const ConstrainedPoemRule = ({setPoem}) => {

    const [description, setDescription] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:4000/constrained-poems/create', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setDescription(body);
        }
        fetchData();
    }, [])

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const postPoem = async() => {
        const result = await fetch('http://localhost:4000/constrained-poems/create', {
            method: 'POST',
            body: JSON.stringify({title, text, description}),
            headers: { 'Content-Type': 'application/json'}
        });
        const body = await result.json();
        setPoem(body);
        setTitle('');
        setText('');
    }


    return(    
        <>
        <br/><br/><br/><br/><br/><br/>

        <section>
            {Object.values(description).map((rule, key) =>
            <div key={key} className="rule-style">
                <h2>Rule</h2>
                {rule}
                <br/><br/>
            </div>)}
        </section> 

        <br/><br/><br/><br/>
        <form style={{textAlign:'center'}}>
        <label>Title</label>
            <input type="text" onChange={(event) => setTitle(event.target.value)}/>
            <br/>
            <textarea placeholder="Your poem..." value={text} onChange={(event) => setText(event.target.value)}></textarea>
            <br/>
            <input type="submit" onClick={() => postPoem()}/>
        </form> 
        </>
    )
}

export default ConstrainedPoemRule;
