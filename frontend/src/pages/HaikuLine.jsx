import React, { useState, useEffect } from 'react';

const HaikuLine = ({match}) => {

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
    
    return(   
        <>
        <br/><br/><br/>
        <form>
            <h2>Select the first line</h2>
            {haikuLine.haikuLine1.map((lines) => 
            <div>
                <input type="checkbox" key={lines.haikuLineID} value={lines.haikuLineID} />
                <label>{lines.line}</label>
            </div>)} 
            <br/>
            <h2>Select the second line</h2>
            {haikuLine.haikuLine2.map((lines) => 
            <div>
                <input type="checkbox" key={lines.haikuLineID} value={lines.haikuLineID} />
                <label>{lines.line}</label>
            </div>)} 
            <br/>
            <h2>Select the third line</h2>
            {haikuLine.haikuLine3.map((lines) => 
            <div>
                <input type="checkbox" key={lines.haikuLineID} value={lines.haikuLineID} />
                <label>{lines.line}</label>
            </div>)}  
        </form>
        </>
    )
}

export default HaikuLine;