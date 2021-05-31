import { React, useState, useEffect } from 'react';

const HaikuLine = ({match, setPoem}) => {

    const themeID = match.params.themeID;
    
    const [haikuLine, setHaikuLine] = useState({haikuLine1: [], haikuLine2: [], haikuLine3:[]});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:4000/haikus/create/${themeID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setHaikuLine(body);
        }
        fetchData();
    }, [themeID]) 

    const [title, setTitle] = useState('');
    const [line1, setLine1] = useState();
    const [line2, setLine2] = useState();
    const [line3, setLine3] = useState();

    const postHaiku = async() => {
        const result = await fetch('http://localhost:4000/constrained-poems/create', {
            method: 'POST',
            body: JSON.stringify({title, line1, line2, line3}),
            headers: { 'Content-Type': 'application/json'}
        });
        const body = await result.json();
        setPoem(body);
        setTitle('');
        setLine1();
        setLine2();
        setLine3();
    }

    return(   
        <>
        <br/><br/><br/>
        <form>
            <label>Title</label>
            <input type="text" onChange={(event) => setTitle(event.target.value)}/>
            <br/>
            <h2>Select the first line</h2>
            {haikuLine.haikuLine1.map((lines) => 
            <div>
                <input type="radio" name="line1" key={lines.haikuLineID} value={lines.haikuLineID} onChange={(event) => setLine1(event.target.value)} />
                <label>{lines.line}</label>
            </div>)} 
            <br/>
            <h2>Select the second line</h2>
            {haikuLine.haikuLine2.map((lines) => 
            <div>
                <input type="radio" name="line2" key={lines.haikuLineID} value={lines.haikuLineID} onChange={(event) => setLine2(event.target.value)}/>
                <label>{lines.line}</label>
            </div>)} 
            <br/>
            <h2>Select the third line</h2>
            {haikuLine.haikuLine3.map((lines) => 
            <div>
                <input type="radio" name="line3" key={lines.haikuLineID} value={lines.haikuLineID} onChange={(event) => setLine3(event.target.value)}/>
                <label>{lines.line}</label>
            </div>)}  
            <input type="submit" onClick={() => postHaiku()}/>
        </form>
        </>
    )
}

export default HaikuLine;