import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  Divider  from '@material-ui/core/Divider';
import styles from '../Todo/Todo.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';







const useStyles = makeStyles((theme) => ({
    diagonalBox: {
        width: '100vw',
        position: 'relative',
        padding: '9.719vw',
        margin: '0 auto',
       "&:before" : {
        width: '100vw',
          content: "' '",
          position: 'absolute',
          left: '0',
          top: '0',
          right: '0',
          bottom: '0',
          transform: 'skewY(-11deg)',
          transformOrigin: '50% 0',
          outline: '1px solid transparent',
          
          backgroundImage: 'linear-gradient(-135deg, #7209B7, #F72585)',
          backfaceVisibility: 'hidden',
    
        }
    
      },

      contentBox : {
       
        maxWidth: '100vw',
        margin: '0 auto',
        padding: '1.5em',
        position: 'relative',
          
      },
    root: {
        color: '#fff',
        border: '0.1em solid white',
        maxWidth: '60vw',
        

    
    
  },
}));



export default function Todo() {
    const classes = useStyles();
    const classmod = styles;
    const [todoItem,setTodoItem] = useState([]);
    
  return (  
    
      <div className={classmod.container}>    
    <List component="nav" className={classes.root} aria-label="mailbox folders">
        {todoItem.map(item=>(<ListItem button>
           
            <ListItemText primary={item}/>
            <ListItemAvatar>
                <Avatar>
                <CheckCircleIcon color='inherit'/>
                </Avatar>
            </ListItemAvatar>
            <Divider light={false} />
        </ListItem>))}
        <Formik
            initialValues={{ newTodo: '' }}
            validate={values => {
                const errors ={};
                if (values.newTodo ===""){
                    errors.newTodo = 'Enter something first dummmy';
                }
                return errors;
            }}
            onSubmit={(values, {resetForm}) => {
                setTodoItem([...todoItem, values.newTodo]);
                resetForm();
                
            }}
        >
        {() => (
            <Form>
                <Field type="text"  name="newTodo" as={TextField} variant="filled" placeholder="To Do's" className={classmod.input}/>
                <div>
                    <Button type="submit" color="primary" variant="contained"  >
                        Add Todo
                    </Button>
                </div>
                <div>
                    <ErrorMessage name="newTodo" component="Typography" className={classmod.errormsg}/>
                </div>
            </Form>
        )}
        </Formik>
    </List>
    </div> 
    );
}
