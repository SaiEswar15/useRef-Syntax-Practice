import "./styles.css";
import { useRef, useEffect } from "react";

export default function App() {
  const name = useRef(null);
  const password = useRef(null);
  function submitHandler(e) {
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
  }

  //autofocus
  useEffect(() => {
    //changed focus from password field to userName field
    name.current.focus();
  }, []);
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter anything"
          name="userName"
          ref={name}
        />
        <input
          type="number"
          placeholder="enter number"
          name="number"
          ref={password}
        />
        <button>submit</button>
      </form>
    </>
  );
}
