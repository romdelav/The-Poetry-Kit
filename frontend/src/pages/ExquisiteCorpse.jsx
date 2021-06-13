import {React, useState, useEffect} from 'react';

const ExquisiteCorpse = ({match, setPoem}) => {

    const poemID = match.params.poemID;

    const [exquisiteCorpse, setExquisiteCorpse] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:4000/exquisite-corpses/select/${poemID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setExquisiteCorpse(body);
        }
        fetchData();
    }, [poemID])

    const [line, setLine] = useState();
    const [username, setUsername] = useState();

    const postLine = async() => {
        const result = await fetch(`http://localhost:4000/exquisite-corpses/select/${poemID}`, {
            method: 'POST',
            body: JSON.stringify({line, username}),
            headers: { 'Content-Type': 'application/json'}
        });
        const body = await result.json();
        setPoem(body);
        setLine('');
        setUsername('');
    }

    return (    
        <div>
            {exquisiteCorpse.map((poem) =>
            <div key={poem.exquisiteCorpseID}>
                {poem.title}
                <br/><br/><br/>
                {poem.username} &nbsp;&nbsp;&nbsp;{poem.createdAt}
                <br/>
                {poem.exquisiteCorpseLine}
            </div>)}
            <br/><br/>
            Contribute
            <form>
                Username: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <br/>
                <textarea placeholder="Your line..." value={line} onChange={(event) => setLine(event.target.value)}></textarea>
                <br/>
                <input type="submit" onClick={() => postLine()}></input>
            </form>
        </div>
    )
};

export default ExquisiteCorpse;
