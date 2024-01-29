import Timer from './components/Timer';
import Counter from './components/Counter';
import MovieList from './components/MovieList';

import movies from './assets/movies';

import './App.css';

function App() {
  return (
    <div>
      <h1>ReactJS - Dynamic Application</h1>

      <Counter />

      <Timer startTime={5} />

      <MovieList movies={movies} headingText='Movie List' />
    </div>
  )
}

export default App
