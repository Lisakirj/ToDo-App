import { useState } from "react";

import { BsPlusSquareFill } from "react-icons/bs";
import ModalForm from "../Modal";

const AddTodo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <BsPlusSquareFill
        size={30}
        color={"#0d6efd"}
        onClick={handleShow}
        style={{ cursor: "pointer" }}
        title="Create new todo"
      />
      <ModalForm onClose={handleClose} show={show} />
    </>
  );
};

export default AddTodo;
