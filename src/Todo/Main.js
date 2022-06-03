// import React,{useState} from "react";
// import './todo.css'
// import axios from 'axios'

// const Main = () => {
// const[state,setState]= useState('')
// const GetTodo = axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((response) => {
//     console.log(response.data);
//     setState(response.data)
// }).catch((err) => {
    
// });
//   return (
//     <div>
//       <div>
//         <h3>TODO List</h3>
//       </div>
//       <div>
//           <input placeholder="Add a New Task"></input>&nbsp;
//           <button className="button">ADD</button>
//       </div>
//       <div>
//             <div>
//                 <h5>{state.title}</h5>
//                 <button>Done</button>
//                 <button>Delete</button>
//             </div>
//     </div>
//     </div>
//   );
// };

// export default Main;

import React from "react";
import "./todo.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit} style={{display:"flex"}}> 
    <Form.Group>
      
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>&nbsp;
    <Button variant="primary mb-3" type="submit">
      ADD
    </Button>
  </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  const GetTodo = axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((response) => {
         console.log(response.data);
         setTodos(response.data)
     }).catch((err) => {
    });

    
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;