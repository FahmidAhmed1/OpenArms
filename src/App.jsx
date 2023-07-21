import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./App.css"

export default function App() {  
  const [newItem, setNewItem] = useState("") // useState manages state variables in functional components, const is used to declare a constant variable that doesn't change. Then using array destructing which holds values [] and can be assigned to variables.  
  const [todos, setTodos] = useState([])
  const navigate = useNavigate()
  function handleSubmit(e) { 
    e.preventDefault()  

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed:
        false}
      ]
    } )
   setNewItem("")  
  } 

 function toggleTodo(id, completed) { 
   setTodos(currentTodos => { 
     return currentTodos.map(todo => { 
        if(todo.id ===id) { 
          return {...todo, completed} 
        } 
        return todo
     })
   })
 }
 function deleteTodo(id) { 
    setTodos(currentTodos =>  { 
      return currentTodos.filter(todo => todo.id != id)
    })
 }

 function loginHandler(){
  navigate("/home");
 }


  return (
    <> 
    <div class="wrapper">
         <div class="title-text">
            <div class="title login"> 
               Login Form
            </div>
            <div class="title signup">
               Signup Form
            </div>
         </div>
         <div class="form-container">
            <div class="slide-controls">
               <input type="radio" name="slide" id="login" checked/>
               <input type="radio" name="slide" id="signup"/>
               <label for="login" class="slide login">Login</label>
               <label for="signup" class="slide signup">Signup</label>
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
               <form action="#" class="login">
                  <div class="field">
                     <input type="text" placeholder="Email Address" required/>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Password" required/>
                  </div>
                  <div class="pass-link">
                     <a href="#">Forgot password?</a>
                  </div>
                  <div class="field btn">
                     <div onClick={loginHandler} class="btn-layer">Login</div>
                  </div>
                  <div class="signup-link">
                     Not a member? <a href="">Signup now</a>
                  </div>
               </form>
               <form action="#" class="signup">
                  <div class="field">
                     <input type="text" placeholder="Email Address" required/>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Password" required/>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Confirm password" required />
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Signup"/>
                  </div>
               </form>
            </div>
         </div>
      </div>
      {/* <script>
         const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });
      </script> */}
      {/* <form onSubmit={handleSubmit} className = "new-item-form"> 
        <div className="form-row"> 
          <label htmlFor="item">New Item </label> 
          <input 
            value ={newItem} 
            onChange={e => setNewItem(e.target.value)}  //As soon as a key is types
            type="text"
            id="item"
          /> 
        </div>  
        <button className="btn">Add</button>
      </form>  
      <h1 className="header">To do List</h1> 
      <ul className="list">   
        {todos.length === 0 && "No todos, so you can chill for now! "} 
        {todos.map(todo => { //Returning an array of elements 
          return  ( 
            <li key = {todo.id}> 
              <label> 
                <input type="checkbox" checked = {todo.
                completed} 
                onChange={e => toggleTodo(todo.id, e.target.checked)}/>  
                {todo.title}
              </label> 
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
           </li>    
          )
        })} 
      </ul>   */}
      
    </> 
  )
} 

