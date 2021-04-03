import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import db from './firebase'
import './Todo.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
    //   left: 400,
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  
    button: {
    //   width: 150,
    //   border: '2px solid #000',
      margin: "10px",
    },
  }));

function Todo(props) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
      };

    const updateTodo = () => {
        // update the todo with the new input
        db.collection("todos").doc(props.todo.id).set(
          {
            todo: input
          },
          { merge: true }
        );
        setOpen(false);
      };
    return (
        <>
        <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h3>Update the Task</h3>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(Event) => setInput(Event.target.value)}
          />
          <Button variant="contained" color="primary" onClick = {updateTodo}>Update Todo ✔️</Button>
    </div>
      </Modal>
        <List className="todo_list">
            <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy DeadLine : ⏰"/>
            </ListItem>
            <Button
            variant="contained"
            color="primary"
            onClick={(e) => setOpen(true)}
            className={classes.button}
            endIcon={<EditIcon>send</EditIcon>}
          >Edit</Button>
            <DeleteForeverIcon onClick ={event => {db.collection('todos').doc(props.todo.id).delete()}} />
        </List>
        </>
    )
}

export default Todo
