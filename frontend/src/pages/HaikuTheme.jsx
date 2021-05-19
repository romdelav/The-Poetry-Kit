import { React, useState, useEffect } from 'react';

const HaikuTheme = () => {

    const [themeInfo, setThemeInfo] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/haikus/create', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await response.json();
            setThemeInfo(body);
        }
        fetchData();
    }, [])

    return(    
        <>
        <br/><br/><br/><br/>
        Select a theme
        <br/><br/>
        {themeInfo.map((thistheme, key) => 
        <div key={key}>{thistheme.theme}</div>)}
        </>
    )
}


export default HaikuTheme;