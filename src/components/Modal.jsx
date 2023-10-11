import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addTodo } from "../store/slices/todoSlice";

const initialValues = {
  title: "",
};

const validation = Yup.object({
  title: Yup.string().min(5).max(100).required("todo is required"),
});

const ModalForm = ({ onClose, show }) => {
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validation,
      onSubmit: (values, action) => {
        dispatch(addTodo(values.title));
        action.resetForm();
        onClose();
      },
    });
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col text-left">
              <label htmlFor="todoTitle" className="form-label">
                Todo Title
              </label>
              <input
                id="title"
                name="title"
                className="form-control"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title ? (
                <small className="text-danger mt-1">{errors.title}</small>
              ) : null}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ModalForm;
