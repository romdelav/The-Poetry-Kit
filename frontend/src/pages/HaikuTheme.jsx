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

        <header>
            <h1>Select a theme</h1>
        </header>
        
        <br/><br/>

        <section>
            {themeInfo.map((thistheme, key) => 
            <div key={key}>
                {thistheme.theme}
            </div>)}
        </section>
        </>
    )
}

export default HaikuTheme;
