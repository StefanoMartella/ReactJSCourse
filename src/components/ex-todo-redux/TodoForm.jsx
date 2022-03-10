import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./action-creators/todo-action-creators";

const rules = {
  required() {
    return { value: true, message: "Il campo è richiesto" };
  },
  maxLength(max) {
    return {
      value: max,
      message: `Sono consentiti al massimo ${max} caratteri`,
    };
  },
};

function TodoForm() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderError = (errorMessage) => (
    <small className="text-danger">{errorMessage}</small>
  );

  const onSubmit = (data) => {
    const id = Math.max(0, ...todos.map(({ id }) => id)) + 1;
    dispatch(addTodo({ id, ...data, done: false }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label className="mb-3">Titolo</label>
        <input
          {...register("title", {
            required: rules.required(),
            maxLength: rules.maxLength(20),
          })}
          className="form-control"
          type="text"
          placeholder="Inserisci il titolo della TODO"
        />
        {errors.title && renderError(errors.title.message)}
      </div>
      <div className="form-group mb-3">
        <label className="mb-3">Descrizione</label>
        <textarea
          {...register("description", {
            required: rules.required(),
            maxLength: rules.maxLength(250),
          })}
          className="form-control"
          rows="5"
          type="text"
          placeholder="Inserisci la descrizione TODO"
        />
        {errors.description && renderError(errors.description.message)}
      </div>
      <button className="btn btn-primary" type="submit">
        Inserisci
      </button>
    </form>
  );
}

export default TodoForm;
