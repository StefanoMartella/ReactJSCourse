import { Accordion, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./action-creators/todo-action-creators";

function TodoItem({ item }) {
  const dispatch = useDispatch();
  const title = `#${item.id} - ${item.title}`;

  return (
    <Accordion.Item eventKey={item.id}>
      <Accordion.Header>
        {item.done ? <del>{title}</del> : title}
      </Accordion.Header>
      <Accordion.Body>
        {item.description}
        <div className="mt-4 d-flex flex-row flex-row-reverse">
          <Button
            onClick={() => dispatch(removeTodo(item.id))}
            variant="danger"
            type="submit"
          >
            Cancella
          </Button>
          <Button
            type="submit"
            className="me-2"
            onClick={() => dispatch(toggleTodo(item.id))}
            variant={item.done ? "warning" : "success"}
          >
            {item.done ? "Non fatto :|" : "Fatto :D"}
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default TodoItem;
