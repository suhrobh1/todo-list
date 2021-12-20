import React, { useState } from 'react';
import './App.css';

 

function App() {

   const [newTask, setNewTask] = useState("");
   const [todos, setTodos] = useState([]);

   const handleSubmit = (e) => {
     e.preventDefault();
     if(newTask.length === 0){
       return;
     }

    setTodos([...todos, 
      {
        text: newTask,
        complete: false,
      }
    ]);
     setNewTask("");
     
   };

   const handleDelete = (indexBelow)=>{
    setTodos(todos.filter((action, index)=> index!== indexBelow));
}

const completeHandler = (i) => {
    
  const updatedItems = todos.map((action, index) => {
      if( index === i){
          action.complete = !action.complete;
      }
      return action
  });
   setTodos(updatedItems);
  }



   return (

    <div className='main'>
      <form onSubmit = {(e) => {
        handleSubmit(e);
      }}
      > <div className='inputAndButton'> 
         <input className='inputField' onChange={(e) => {setNewTask(e.target.value);}} value ={newTask} type="text"/>
         <button className='submitButton'>Add </button>
         </div>
      </form>

      {
        todos.map((action, index) => {
          
          let todoClasses = "";
          if(action.complete){
            todoClasses="complete";
          }else{todoClasses = "incomplete"}


          return(
          <div className='items' key={index}>
            <p className = {todoClasses}>{action.text}</p>
            <input className='checkBox' onChange={(e) =>{completeHandler(index);}}
              name="complete"
              type="checkbox"
              checked = {action.complete}
            />
            
            <button className='deleteButtons' onClick={()=>handleDelete(index)}>Delete </button>
          </div>
        )})
      }


    </div>
   )

  }

  export default App;














