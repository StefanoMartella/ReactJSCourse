import React from "react";
import { Accordion, Card } from "react-bootstrap";
import TodoItem from "./TodoItem";
import { TodoContext } from "./context/TodoContext";

class TodoList extends React.Component {
  render() {
    const { todos, setTodos } = this.context;

    return (
      <div className="mb-2 mt-4">
        {todos.length ? (
          <Accordion>
            {todos.map((item) => (
              <TodoItem key={item.id} item={item} setTodos={setTodos} />
            ))}
          </Accordion>
        ) : (
          <Card className="p-4">
            <span className="text-center text-muted">
              Ancora nulla nella TODO, hai un sacco di tempo per te :D
            </span>
          </Card>
        )}
      </div>
    );
  }
}

TodoList.contextType = TodoContext;

export default TodoList;
