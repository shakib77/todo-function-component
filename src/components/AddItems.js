import React from "react";
import {
    Stack,
    Button,
    Box,
    Typography,
    Modal,
    InputLabel,
    FormControl,
    Input,
    FormHelperText
} from '@mui/material';

const AddItems = () => {

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

    /*const handleClick = () => {
        if (!input) {
            createRef.current.innerHTML = "Please enter input field";
        } else if (input && !toggleSubmit) {
            createRef.current.innerHTML = '';
            setItems(
                items.map((element) => {
                    if (element.id === isEdit) {
                        return {
                            ...element,
                            text: input,
                        };
                    }
                    return element
                })
            );
            setToggleSubmit(true);
            setInput('');
            setIsEdit(null);
        } else {
            createRef.current.innerHTML = '';
            const allInput = {
                id: Math.floor(Math.random() * 10000),
                text: input,
            };
            setItems([...items, allInput]);
            setInput('');
        }
    };*/

    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handleOpen}>Add new</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Task</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text"/>
                    </FormControl>
                </Box>
            </Modal>
        </Stack>
    );
};

export default AddItems;
