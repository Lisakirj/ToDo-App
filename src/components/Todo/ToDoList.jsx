import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

const ToDoList = ({ filteredData }) => {
  return (
    <div className="container border rounded  p-3  ">
      {filteredData.length > 0 ? (
        filteredData.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <p className="list-group-item">There are no to do</p>
      )}
    </div>
  );
};
ToDoList.propTypes = {
  filteredData: PropTypes.array.isRequired,
};
export default ToDoList;
