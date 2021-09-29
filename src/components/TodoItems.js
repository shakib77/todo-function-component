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
                            /*onClick={(event) => {
                                handleClick(event, cellValues);
                            }}*/
                        >
                            Delete
                        </Button>
                    );
                }
            },
        ];

    const rows: GridRowsProp = todo.map((item, i) => (
        {
            id: i,
            col1: item.id,
            col2: item.title,
            col3: item.completed ? 'Completed' : 'Incomplete',
        }
    ))
    return (
        <div style={{height: 300, width: '100%'}}>
            <DataGrid rows={rows} columns={columns}/>
        </div>
    );
}

export default TodoItems
