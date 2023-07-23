import React from 'react';
import './stylesheets/TodoList.css';

const TodosList  = ( { taskName , id, deleteTask } ) => {
	
	return (
		
			<li className="list-item">
				<h1 className="taskTitle">{taskName}</h1>
				<button type="button" onClick={()=>deleteTask(id)} className="btn btn-delete">X</button>
			</li>
		
	
	);
}

export default TodosList;