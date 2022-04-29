import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { connect } from "react-redux";
import "./App.css";
import {
  addTodo,
  deleteTodo,
  deleteAllTodo,
  activeTodo,
} from "./redux/actions/todos";

const App = (props) => {
  const { todos, addTodo, deleteTodo, deleteAllTodo, activeTodo } = props;
  const [active, setActive] = useState(null);

  const saveTodo = (e) => {
    e.preventDefault();
    const task = document.getElementsByName("task")[0].value;
    const active = document.getElementsByName("active")[0].checked;
    const todoInput = document.getElementById("teskInput");
    if (!task && task.length < 1) return;

    const id = Math.round(Math.random() * 10000000);
    addTodo(id, task, active);
    todoInput.value = "";
  };

  return (
    <div className="container">
      <div className="cont-2">
        <h1>TO DO APP</h1>
        <div className="todo">
          <form className="todo-form">
            <div className="todo-li-item">
              <input type="checkbox" name="active" />
              <input
                id="teskInput"
                className="todo-input"
                name="task"
                placeholder="Görev Ekle..."
              ></input>
              <button className="btn" onClick={saveTodo}>
                {" "}
                Add Todo
              </button>
            </div>
          </form>
        </div>
        <div className="todo-list">
          {todos &&
            todos
              .filter((a) => (active !== null ? a.active === active : a))
              .map((todo) => {
                return (
                  <div className="todo-li-item " key={todo.id}>
                    <input
                      type="checkbox"
                      name="check"
                      onClick={() => {
                        console.log(todo);
                        console.log("id=" + todo.id + "active=" + todo.active);
                        activeTodo(todo.id, todo.active);
                      }}
                      defaultChecked={todo.active}
                    />
                    <label htmlFor="check">{todo.todo} </label>

                    <button className="sil" onClick={() => deleteTodo(todo.id)}>
                      <IoCloseCircle className="icon" />
                    </button>
                  </div>
                );
              })}
        </div>

        <div className="foot-div">
          <footer>
            <button className="btn-fooret">{todos.length} ToDo</button>
            <button className="btn-fooret" onClick={() => setActive(null)}>
              All
            </button>

            <button className="btn-fooret" onClick={() => setActive(false)}>
              Active
            </button>

            <button className="btn-fooret" onClick={() => setActive(true)}>
              Complete
            </button>
            <button className="btn-fooret" onClick={() => deleteAllTodo()}>
              Delete All
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ todos }) => {
  return {
    todos: todos.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  deleteAllTodo,
  activeTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
