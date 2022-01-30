import * as React from "react";
import { ENTER_KEY } from "./constants";

interface Props{
  handleNewTodoKeyDown: (val:string)=>void
}


const Header:React.FC<Props> = ({handleNewTodoKeyDown}) => {
  const todoRef = React.useRef<HTMLInputElement>(null)

  const handleKeyDown = (event : React.KeyboardEvent) =>{
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    let val = todoRef.current.value.trim();
    if (val) {
      handleNewTodoKeyDown(val)
      todoRef.current.value = '';
    }
  }

  return (
    <header className="header">
    <h1>todos</h1>
    <input
      ref={todoRef}
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={handleKeyDown}
      autoFocus={true}
    />
  </header>
  );
};

export default Header;