import { useForm } from "react-hook-form";

function FormHookForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSuccess = () => {
    console.log(getValues());
  };

  const onError = (error) => {
    console.error(error);
  };

  const renderError = (errorMessage) => {
    return <p style={{ color: "red" }}>{errorMessage}</p>;
  };

  return (
    <form onSubmit={handleSubmit(onSuccess, onError)}>
      <div>
        <label>Nome:</label>
        <br />
        <input
          {...register("name", {
            required: { value: true, message: "Il nome è richiesto" },
            maxLength: { value: 10, message: "Max 10 caratteri consentiti" },
          })}
        />
        {errors.name && renderError(errors.name.message)}
      </div>

      <div>
        <label>Cognome:</label>
        <br />
        <input
          {...register("surname", {
            required: { value: true, message: "Il cognome è richiesto" },
          })}
        />
        {errors.surname && renderError(errors.surname.message)}
      </div>

      <button style={{ marginTop: 20 }} type="submit">
        Invia
      </button>
    </form>
  );
}

export default FormHookForm;
