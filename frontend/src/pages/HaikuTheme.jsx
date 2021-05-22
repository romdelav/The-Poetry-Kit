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
        <br/><br/><br/><br/><br/><br/>

        <header>
            <div className="header-style">Select a theme</div>
        </header>
        
        <br/><br/><br/><br/>

        <section style={{textAlign: 'center'}}>
            {themeInfo.map((thistheme, key) => 
            <span key={key} value={thistheme.themeID} className="theme-style">
                {thistheme.theme}
            </span>)}
        </section>
        </>
    )
}

export default HaikuTheme;
