import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function CharacterDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Not found!');
                }

                return res.json();
            })
            .then(setCharacter)
            .catch((error) => {
                navigate('/characters');
            });
    }, [id]);

    return (
        <>
            <h1>{character.name}</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus assumenda earum blanditiis, ab officiis! Veniam atque quia quisquam. Ad vel provident quidem, facilis est laudantium. Fuga tenetur placeat, soluta harum modi, quidem quod est odit laboriosam veritatis quae autem eaque corrupti illo! Magni enim fuga nostrum, quis velit sequi.</p>
        </>
    );
};