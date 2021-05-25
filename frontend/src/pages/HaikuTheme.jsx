import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            {themeInfo.map((theme) => 
            <Link to={`/haikus/create/${theme.themeID}`} key={theme.themeID} className="theme-style">{theme.theme}</Link>)}
        </section>
        </>
    )
}

export default HaikuTheme;
