import { useState } from 'react'

function Todolist(){
const [Tasks,SetTasks] = useState(["Eat Breakfast","Take A Shower"]);
const [NewTask,SetNewTask] = useState("");
const AddNewTask = ()=> {if(NewTask.trim() != "") SetTasks([...Tasks,NewTask]);
    SetNewTask("");
};
const updateTask= (e)=> SetNewTask(e.target.value)
const removeTask = (index) =>{
    SetTasks(Tasks.filter((_,i)=> i != index ))
}
const MoveUp = (index) =>{
if (index > 0){
    const UpdatedTasks = [...Tasks];
    [UpdatedTasks[index], UpdatedTasks[index-1]] = [UpdatedTasks[index-1], UpdatedTasks[index]]
    SetTasks(UpdatedTasks);
}
}
const MoveDown = (index)=>{
    if (index < Tasks.length-1){
        const UpdatedTasks = [...Tasks];
        [UpdatedTasks[index], UpdatedTasks[index+1]] = [UpdatedTasks[index+1], UpdatedTasks[index]]
        SetTasks(UpdatedTasks);
    }
}

return(
<div className="container">
  <h1>Todo List</h1>
    <input id="new-task" type="text" value={NewTask} onChange={updateTask} className="input-task" placeholder='Enter A New Task ...'/>
    <button onClick={AddNewTask} className='add-task-btn'>Add</button>
    <ol className="todo-list">
     {Tasks.map((t,i)=> 
     
     
           <li className="list-item" key={i}>{t} 
           <span onClick={()=>removeTask(i)} className='remove btn'>❌</span>
           <span onClick={()=>MoveUp(i)}className='move-up btn'>☝️</span>
           <span onClick={()=>MoveDown(i)}className='move-down btn'>👇</span>
          
           </li> 
           
    
    )}
    </ol>
</div>)
}
export default Todolist