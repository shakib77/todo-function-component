import {useEffect, useState} from "react";
import './App.css';
import { Typography } from '@mui/material';
import TodoItems from "./components/TodoItems";
import AddItems from "./components/AddItems"

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
            <div className='App'>
            <Typography align={"center"} variant={'h3'}>Todo list</Typography>
            <AddItems/>
            <TodoItems todo={todo}/>
            </div>
        </>
    );
}

export default App;
