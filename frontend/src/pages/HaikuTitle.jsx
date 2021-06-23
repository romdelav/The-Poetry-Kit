import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HaikuTheme = () => {

    const [title, setTitle] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/haikus/titles', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await response.json();
            setTitle(body);
        }
        fetchData();
    }, [])

    return(    
        <>
        <br/><br/><br/><br/><br/><br/>

        <header>
            <div className="header-style">Select a Haiku</div>
        </header>
        
        <br/><br/><br/><br/>

        <section style={{textAlign: 'center'}}>
            {title.map((poem) => 
            <Link to={``} key={poem.poemID} className="theme-style">{poem.title}</Link>)}
        </section>
        </>
    )
}

export default HaikuTheme;
