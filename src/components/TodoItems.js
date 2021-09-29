import React, {useState} from "react";
import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const TodoItems = ({todo}) => {
    // console.log('todo->', JSON.stringify(todo));

    // const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    // const [toggleSubmit, setToggleSubmit] = useState(true);
    // const [isEdit, setIsEdit] = useState(null);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const columns: GridColDef[] =
        [
            {field: 'col1', headerName: 'Id', width: 150},
            {field: 'col2', headerName: 'Title', width: 150},
            {field: 'col3', headerName: 'Status', width: 150},
            {
                field: "Add",
                renderCell: (cellValues) => {
                    return (
                        <Button
                            variant="contained"
                            color="success"
                            // onClick={() => deleteItem(id)}
                        >
                            Add
                        </Button>
                    );
                }
            },
            {
                field: "Edit",
                renderCell: (cellValues) => {
                    return (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleOpen}
                        >
                            Edit
                        </Button>
                    );
                }
            },
            {
                field: "Delete",
                renderCell: (cellValues) => {
                    // console.log('cel->', cellValues.id);
                    return (
                        <Button
                            variant="contained"
                            color="warning"
                            onClick={() => deleteItem(cellValues.id)}
                        >
                            Delete
                        </Button>
                    );
                }
            },
        ];

    //delete method
    const deleteItem = (id) => {
        let ids = id + 1;
        console.log('id', ids);
        const filterItems = todo.filter((element) => {
            return element.id !== ids
        })
        // console.log('dd', filterItems);
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        ) : (
            <div><h1>No List found</h1></div>
        )
    );
}

export default TodoItems
