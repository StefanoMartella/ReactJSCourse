import { Accordion, Card } from "react-bootstrap";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
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

export default TodoList;
