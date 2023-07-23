import React , { useState , useEffect } from 'react';
import TodosList from './TodosList';
import './stylesheets/Todo.css';

const Todo = () => {
	
	const [todo, setTodo] = useState("")
	const [listaTodos, setListaTodos] = useState([])
	
	const handleChange = (e) => {
		setTodo(e.target.value)
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		const newTodo = {
			id: Date.now(),
			task: todo
		}
		
		setListaTodos([
			...listaTodos, 
			newTodo
		])
		
		
		localStorage.setItem('task', JSON.stringify([...listaTodos, newTodo]));
		
		setTodo("")
	}
	
	const deleteTask = (id) => {
		let newData = listaTodos.filter((item)=> (
			item.id!==id
		))
		
		setListaTodos(newData)
		
		
		localStorage.setItem('task', JSON.stringify(newData));
	}
	
	useEffect(()=> {
		
		if(JSON.parse(localStorage.getItem('task'))) {
			setListaTodos(JSON.parse(localStorage.getItem('task')))
		}
	},[])
	
	return (
		<>	
			<h1 className="title">To-Do App</h1>
				<div className="container">
					<form onSubmit={handleSubmit} className="form-container">
						<input type="text" onChange={handleChange} className="input" value={todo} name="todo" placeholder="Insert your task..." autoComplete="off" required />
						<button type="submit" className="btn add-btn">Add Task</button>
					</form>
					<ul className="list">
							{
								listaTodos.map((item)=> (
									<TodosList 
										key={item.id}
										taskName={item.task}
										id={item.id}
										deleteTask={deleteTask}		
									/>
								))
							}
					</ul>
				</div>
			
		</>
	);
	
	
}

export default Todo;