import {useEffect, useState} from "react";
import './App.css';
import TodoItems from "./components/TodoItems";

// import AddItems from "./components/AddItems"

function App() {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let response = await (
            await fetch("https://jsonplaceholder.typicode.com/todos/")
        ).json();
        // console.log('res->', response);
        setTodo(response);
    };

    return (
        <>
            <h1>Todo list</h1>
            <TodoItems todo={todo}/>
        </>
    );
}

export default App;
