import React,{ useState,useEffect} from"react"
import './App.css';
import Form from "./components/Form"
import TodoList from "./components/Todolist"
function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterdTodos, setFilterdtodos] = useState([])

useEffect(()=>{
  getLocalTodos()
},[])

useEffect(()=>{
    filterHandler()
    savetolocal()
  },[todos, status])

  const filterHandler = ()=>{
    switch (status) {
      case "completed":
        setFilterdtodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilterdtodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterdtodos(todos)
        break;
    }
  }
 //save to local
const savetolocal = ()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
}
const getLocalTodos = ()=>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem("todos",JSON.stringify([]));
  }else{
    let todolocal = JSON.parse(localStorage.getItem("todos"))
    setTodos(todolocal)
  }
}

  return (
    <div className="App">
      <header>
        <h1>To Do list </h1>
      </header>
      <Form 
      setInputText = {setInputText} 
      todos = {todos} 
      setTodos = {setTodos} 
      inputText={inputText}
      setStatus = {setStatus}
      />
      <TodoList filterdTodos = {filterdTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
