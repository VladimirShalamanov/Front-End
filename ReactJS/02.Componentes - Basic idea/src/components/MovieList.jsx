import Heading from "./Heading";
import Movie from "./Movie";

export default function MovieList(props) {
    return (
        <div className="movie-list">
            <Heading>{props.headingText}</Heading>

            <ol typeof="1">
                <Movie data={props.movies[0]} />
                <Movie data={props.movies[1]} />
                <Movie data={props.movies[2]} />
                <Movie data={props.movies[3]} />
            </ol>
        </div>
    );
}