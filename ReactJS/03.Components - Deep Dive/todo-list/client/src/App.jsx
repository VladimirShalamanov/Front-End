import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {

    return (
        <div>

            <Header />


            <main className="main">
                <TodoList />
            </main>

            
            <Footer />

        </div>
    )
}

export default App
