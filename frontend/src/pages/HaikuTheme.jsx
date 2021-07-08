import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HaikuTheme = () => {

    const [themeInfo, setThemeInfo] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/haikus/themes', {
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
            {themeInfo.map((theme, key) => 
            <Link to={`/haikus/themes/${theme.themeID}`} key={key} className="theme-style">{theme.theme}</Link>)}
        </section>
        </>
    )
}

export default HaikuTheme;
