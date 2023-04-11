import "./styles.css";
import {useState} from "react";

//method by generally using useState
//refer to App to see the method of useRef

export default function Input() {
  const [state,setState] = useState({
    userName : "",
    number : ""
  })

  function changeHandler(e)
  {
    setState({...state, [e.target.name] : e.target.value})
  }

  return (
    <>
    <form>
      <input type = "text" placeholder = "enter anything" name ="userName" onChange = {changeHandler}/>
      <input type = "number" placeholder = "enter number" name ="number" onChange = {changeHandler}/>
      <button>submit</button>
    </form>
    <h1>User Name = {state.userName}</h1>
    <h1>Age = {state.number}</h1>
    </>
  );
}