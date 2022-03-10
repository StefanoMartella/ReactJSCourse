import { Accordion, Card } from "react-bootstrap";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <div className="mb-2 mt-4">
      {todos.length === 0 ? (
        <Card className="p-4">
          <span className="text-center text-muted">
            Ancora nulla nella TODO, hai un sacco di tempo per te :D
          </span>
        </Card>
      ) : (
        <Accordion>
          {todos.map((todo) => (
            <TodoItem key={todo.id} item={todo} setTodos={setTodos} />
          ))}
        </Accordion>
      )}
    </div>
  );
}

export default TodoList;
