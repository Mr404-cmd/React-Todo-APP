import React from "react";

const Form = ({setInputText,todos,setTodos,inputText, setStatus})=>{
    const texthandler = (e)=>{
        setInputText(e.target.value)
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        setTodos([
            ...todos,
            {text:inputText, completed: false, id:Math.random()*2}
        ])
        setInputText("")
    }
    const statusHandler = (e)=>{
      setStatus(e.target.value)
    }
    return (
        <form>
      <input value={inputText} type="text" onChange={texthandler} className="todo-input" />
      <button className="todo-button" onClick={submitHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange = {statusHandler }>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}
export default Form;