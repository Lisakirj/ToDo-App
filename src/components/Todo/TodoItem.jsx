import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeTodo, setCompleteStatus } from "../../store/slices/todoSlice";

import {
  BsPencilSquare,
  BsTrash,
  BsFillCheckCircleFill,
  BsArrowClockwise,
} from "react-icons/bs";

import Favourite from "../Favourite";
import EditForm from "../EditForm";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("view");
  return (
    <>
      {mode === "view" ? (
        <div className="d-flex justify-content-between  align-items-center my-3 mx-2 p-2 border rounded">
          <div className="row  text-start">
            <div className="d-flex align-items-center">
              <h6
                className={`${
                  todo.isComplete === "true"
                    ? "text-decoration-line-through"
                    : ""
                } mb-1`}>
                {todo.title}
              </h6>
              <Favourite todo={todo} />
            </div>
            <small className="text-start ">{todo.date}</small>
          </div>
          <div className="d-flex ">
            {todo.isComplete === "false" ? (
              <BsFillCheckCircleFill
                className="custom-icons"
                size={20}
                style={{
                  color: "#0d6efd",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                title="Mark Task as complete"
                onClick={() =>
                  dispatch(setCompleteStatus({ id: todo.id, status: "true" }))
                }
              />
            ) : (
              <BsArrowClockwise
                className="custom-icons"
                size={20}
                style={{
                  color: "blue",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                title="Bring back to in progress"
                onClick={() =>
                  dispatch(setCompleteStatus({ id: todo.id, status: "false" }))
                }
              />
            )}
            <BsTrash
              className="icons-red custom-icons me-2"
              size={20}
              style={{
                cursor: "pointer",
                color: "red",
              }}
              title="Delete todo"
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            />
            <BsPencilSquare
              className="icons-blue custom-icons"
              size={20}
              style={
                todo.isComplete === "true"
                  ? { cursor: "default", color: "gray" }
                  : {
                      cursor: "pointer",
                      color: "#0d6efd",
                    }
              }
              title={
                todo.isComplete === "true"
                  ? "You can't edit completed task"
                  : "Edit task"
              }
              onClick={() => {
                todo.isComplete !== "true" ? setMode("edit") : void 0;
              }}
            />
          </div>
        </div>
      ) : (
        <EditForm todo={todo} onMode={setMode} />
      )}
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
