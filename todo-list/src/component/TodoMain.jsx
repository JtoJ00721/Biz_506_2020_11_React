import React, { Component } from "react";
import "../css/TodoMain.css";
import TodoInsert from "./TodoInsert";

/**
 * class 방식의 Component
 * 반드시 react의 Component 클래스를 상속받아야 한다.
 * render() method를 사용하여 실제 view를 수현하도록 되어있다.
 * 함수방식에서 바로 나타나던 return문이 render() method 내부에 위치한다.
 */
class TodoMain extends Component {
  render() {
    return (
      <main className="todo-main">
        <h3>TO-DO List</h3>
        <TodoInsert />
        <p>TODO LIST</p>
      </main>
    );
  }
}

export default TodoMain;
