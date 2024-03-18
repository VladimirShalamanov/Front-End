import Navigation from "./components/Navigation";
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <>
            <Navigation />

            <TodoList />
        </>
    );
};