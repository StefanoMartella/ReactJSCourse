import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

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
  pattern(regex) {
    return {
      value: regex,
      message: "Valore non valido",
    };
  },
};

function AddProductForm() {
  const [categories, setCategories] = useState([]);
  const controller = useRef();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    controller.current = new AbortController();

    axios
      .get("https://fakestoreapi.com/products/categories", {
        signal: controller.current.signal,
      })
      .then(({ data }) => setCategories(data));

    return () => {
      controller.current.abort();
    };
  }, []);

  const renderError = (errorMessage) => (
    <p className="text-danger m-0">{errorMessage}</p>
  );

  const onSuccess = () => {
    console.log(getValues());
  };

  const onError = (error) => {
    console.error(error);
  };

  return (
    <div className="p-5 shadow">
      <h2 className="mb-4 text-center">Inserisci prodotto</h2>
      <form>
        <label className="mt-3">Titolo</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            {...register("title", {
              required: rules.required(),
              maxLength: rules.maxLength(10),
            })}
            type="text"
          />
        </div>
        <p className="text-muted m-0">Obbligatorio, massimo 10 caratteri</p>
        {errors.title && renderError(errors.title.message)}

        <label className="mt-3">Descrizione</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            {...register("description", {
              required: rules.required(),
              maxLength: rules.maxLength(250),
            })}
            type="text"
          />
        </div>
        <p className="text-muted m-0">Obbligatorio, massimo 250 caratteri</p>
        {errors.description && renderError(errors.description.message)}

        <label className="mt-3">Prezzo</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            {...register("price", {
              required: rules.required(),
              pattern: rules.pattern(/\d+\.?\d*/),
            })}
          />
        </div>
        <p className="text-muted m-0">Obbligatorio, valore numerico</p>
        {errors.price && renderError(errors.price.message)}

        <label className="mt-3">URL dell'immagine</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            {...register("image", {
              required: rules.required(),
              pattern: rules.pattern(
                /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
              ),
            })}
            type="text"
          />
        </div>
        <p className="text-muted m-0">Obbligatorio, URL</p>
        {errors.image && renderError(errors.image.message)}

        <label className="mt-3">Categoria</label>
        <div className="input-group mb-3">
          <select
            className="form-control"
            {...register("category", {
              required: rules.required(),
            })}
            type="text"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <p className="text-muted m-0">Obbligatorio</p>
        {errors.category && renderError(errors.category.message)}

        <button
          onClick={handleSubmit(onSuccess, onError)}
          className="btn btn-primary mt-4"
        >
          Invia
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
