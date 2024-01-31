import { useState, useEffect } from "react";

export default function Starwars(props) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
        <h1>SW Characters</h1>
        <ul>
            {characters.map(c => <li key={c.url}>{c.name}</li>)}
        </ul>
        </div>
    );
}