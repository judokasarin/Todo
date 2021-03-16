import React from 'react';
import styles from './App.module.css';
import { Todo , Cover} from './components'


const App = () => {
  
  
  const classes = styles;


  return(
   
     <div className={classes.container} bgcolor="primary.main">
        
      <Cover /> 
      <Todo />    
      </div>
    
  )
}
export default App;
