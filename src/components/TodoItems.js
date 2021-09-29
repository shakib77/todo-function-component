import React, {useState} from "react";


import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import {Button} from "@mui/material";

/*const deleteItem = (id) => {
    const filterItems = items.filter((element) => {
        return element.id !== id;
    });
    setItems(filterItems);
};*/

const TodoItems = ({todo}) => {

    const [input, setInput] = useState('');
    const [items, setItems] = useState(todo);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEdit, setIsEdit] = useState(null);

    const columns: GridColDef[] =
        [
            {field: 'col1', headerName: 'Id', width: 150},
            {field: 'col2', headerName: 'Title', width: 150},
            {field: 'col3', headerName: 'Status', width: 150},
            {
                field: "Delete",
                renderCell: (cellValues) => {
                    return (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(event) => {
                                // handleClick(event, cellValues);
                            }}
                        >
                            Delete
                        </Button>
                    );
                }
            },
        ];

    //delete method
    const deleteItem = (id) => {
        const filterItems = todo.map(item => (
            item.filter((element) => {
                return element.id !== id
            })
        ))
        setItems(filterItems);
    };

    const rows: GridRowsProp = todo.map((item, i) => (
        {
            id: i,
            col1: item.id,
            col2: item.title,
            col3: item.completed ? 'Completed' : 'Incomplete',
        }
    ))
    return (
        todo ? (
            <div style={{height: 300, width: '100%'}}>
                <DataGrid rows={rows} columns={columns}/>
            </div>
        ) : (
            <div><h1>No List found</h1></div>
        )
    );
}

export default TodoItems
