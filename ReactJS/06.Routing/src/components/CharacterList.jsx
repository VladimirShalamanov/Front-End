import { useEffect, useState } from 'react';
import CharacterListItem from './CharacterListItem';
import styles from './CharacterList.module.css';

const base_urlr = 'https://swapi.dev/api';

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${base_urlr}/people`, { signal: abortController.signal })
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
            });

        return () => {
            abortController.abort();
        }
    }, []);

    return (
        <div className={styles.characterList}>
            {characters.map((c, i) =>
                <CharacterListItem key={c.name} id={i + 1} {...c} />
            )}
        </div>
    );
};