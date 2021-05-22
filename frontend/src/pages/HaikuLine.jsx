import React, { useState, useEffect } from 'react';

const HaikuLine = ({match}) => {

    const themeID = match.params.themeID;
    
    const [haikuLine, setHaikuLine] = useState({haikuLine1: [], haikuLine2: [], haikuLine3: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:4000/haikus/create/${themeID}`);
            const body = await result.json();
            setHaikuLine(body);
        }
        fetchData();
    }) 
    
    return(   
        <>
        <br/><br/><br/>
            <h2>Select the first line</h2>
            <br/>
            {haikuLine.haikuline1.map((lines) => 
            <div key={lines.haikuLineID}>
                <div>{lines.line}</div>
            </div>)} 
            <br/>
            {haikuLine.haikuline2.map((lines) => 
            <div key={lines.haikuLineID}>
                <div>{lines.line}</div>
            </div>)} 
            <br/>
            {haikuLine.haikuline3.map((lines) => 
            <div key={lines.haikuLineID}>
                <div>{lines.line}</div>
            </div>)} 
        </>
    )
}

export default HaikuLine;