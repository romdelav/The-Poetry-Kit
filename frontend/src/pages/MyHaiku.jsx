import {React, useState, useEffect} from 'react';

const MyHaiku = ({match}) => {

    const poemID = match.params.poemID;

    const [haiku, setHaiku] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:4000/haikus/${poemID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const body = await result.json();
            setHaiku(body);
        }
        fetchData();
    }, [poemID]) 

    return (
        <>
        {haiku.map((poem) =>
        <div key={poem.haikuLineID}>
            {poem.line}
        </div>)}    
        </>
    )
};

export default MyHaiku;
