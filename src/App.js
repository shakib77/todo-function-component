import './App.css';
import TodoItems from "./components/TodoItems";

function App() {
    return (
        <>
            <div className="todo_title">
                <h3>Todo List</h3>
            </div>
            <TodoItems />
        </>
    );
}

export default App;
