import { Accordion, Button } from "react-bootstrap";

function TodoItem({ item, setTodos }) {
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
            onClick={() =>
              setTodos((oldTodos) =>
                oldTodos.filter(({ id }) => id !== item.id)
              )
            }
            variant="danger"
            type="submit"
          >
            Cancella
          </Button>
          <Button
            type="submit"
            className="me-2"
            onClick={() =>
              setTodos((oldTodos) =>
                oldTodos.map((todo) =>
                  todo.id === item.id ? { ...item, done: !item.done } : todo
                )
              )
            }
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
