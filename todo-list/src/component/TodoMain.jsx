import React, { Component } from "react";
import "../css/TodoMain.css";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

/**
 * class 방식의 Component
 * 반드시 react의 Component 클래스를 상속받아야 한다.
 * render() method를 사용하여 실제 view를 수현하도록 되어있다.
 * 함수방식에서 바로 나타나던 return문이 render() method 내부에 위치한다.
 */
class TodoMain extends Component {
  //class 방식에서 state 변수 선언하기
  state = {
    id: 3,
    todoList: [
      { id: 0, text: "빼빼로데이지롱", isComplete: false },
      { id: 1, text: "빙빙이 왜 안줘! ><", isComplete: false },
      { id: 2, text: "읭?", isComplete: false },
      { id: 3, text: "마누라한테 빼빼로도 안줘? ><", isComplete: true },
    ],
  };

  render() {
    return (
      <main className="todo-main">
        <h3>TO-DO List</h3>
        <TodoInsert />
        <TodoList todoList={this.state.todoList} />
      </main>
    );
  }
}

export default TodoMain;
