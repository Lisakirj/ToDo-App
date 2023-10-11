import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { updateTodo } from "../store/slices/todoSlice";

const validation = Yup.object({
  title: Yup.string().min(5).max(100).required("Task title is required"),
  id: Yup.string().required("key required"),
});

const EditForm = ({ todo, onMode }) => {
  const dispatch = useDispatch();
  const initialValues = {
    title: todo.title,
    id: todo.id,
  };

  const { errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      initialValues,
      validationSchema: validation,
      onSubmit: (values) => {
        dispatch(updateTodo(values));
        onMode("view");
      },
    }
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        id="title"
        className="form-control"
        defaultValue={todo.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <input type="hidden" name="key" value={todo.id} />
      <BsXCircle
        size={20}
        style={{ color: "red", margin: "10px", cursor: "pointer" }}
        onClick={() => {
          onMode("view");
        }}
        title="Cancel"
      />
      <BsCheckCircle
        size={20}
        style={{
          color: "green",
          margin: "10px",
          cursor: "pointer",
        }}
        onClick={handleSubmit}
        title="Save"
      />
      {errors.title && touched.title ? (
        <small className="text-danger mt-1">{errors.title}</small>
      ) : null}
    </form>
  );
};
EditForm.propTypes = {
  todo: PropTypes.object.isRequired,
  onMode: PropTypes.func.isRequired,
};
export default EditForm;
