# useRef-Syntax-Practice
Created with CodeSandbox

# useRef() hook

as we already know when we `useState()` the entire component gets re-rendered.

so inorder to not re-render the entire component even after changig the state we use the hook called `useRef()`

- using this hook you will not be notified on the screen that the state is changed.
- it doesnt re-render the component

**using the useState() :**

```java
import "./styles.css";
import {useState} from "react";

export default function App() {
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
      <button onSubmit = {submitHandler}>submit</button>
    </form>
    <h1>User Name = {state.userName}</h1>
    <h1>Age = {state.number}</h1>
    </>
  );
}
```

on every change of letter the entire component will re-render so in the place of `useState` we use the `useRef()`

**using the useRef() :**

```java
import "./styles.css";
import {useRef, useEffect, } from "react";

export default function App() {

  
  const name = useRef(null);
  const password = useRef(null);
  function submitHandler(e)
  {
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
   
  }

  return (
    <>
    <form onSubmit = {submitHandler}>
      <input type = "text" placeholder = "enter anything" name ="userName" ref = {name} />
      <input type = "number" placeholder = "enter number" name ="number" ref = {password}/>
      <button >submit</button>
    </form>
    
    </>
  )
```

**Is this only the use of the useRef() ?**

No, there are some more uses of useRef hook 

1. Auto focus 
2. other
3. other

**Auto Focus :** 

When we come on to a particular page especially the login page or the sign up page.

in some advanced websites we can see the cursor on the first input field - auto focusing.

this can be done by using the useRef hook.

```java
  //autofocus
  useEffect(()=>{
    password.current.focus();
  },[])
```

```java
import "./styles.css";
import {useRef, useEffect, } from "react";

export default function App() {

  
  const name = useRef(null);
  const password = useRef(null);
  function submitHandler(e)
  {
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
   
  }

  //autofocus
  useEffect(()=>{
    password.current.focus();
  },[])
  return (
    <>
    <form onSubmit = {submitHandler}>
      <input type = "text" placeholder = "enter anything" name ="userName" ref = {name} />
      <input type = "number" placeholder = "enter number" name ="number" ref = {password}/>
      <button >submit</button>
    </form>
    
    </>
  )
```

**Steps to be followed to use the hook :**

**step 1 :**

```java
import {useRef} from "react";
```

**step 2 :**

```java
const data = useRef();
```

**step 3 :**

```java
<input type = "text" ref = {data}/>
```

use this `ref` instead of onChange handler

**step 4 :**

```java
function submithandler(e)
{
	console.log(data.current.value);
}
```

to get the value use `current.value` similar to `e.target.value` for onChange.

**step 5 :**

```java
//autofocus
  useEffect(()=>{
    password.current.focus();
  },[])
```

to render only once write inside `useEffect.`

to focus write `current.focus`
