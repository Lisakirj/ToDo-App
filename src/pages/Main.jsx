import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import AddTodo from "../components/Todo/AddTodo";
import Filter from "../components/Filter";
import ToDoList from "../components/Todo/ToDoList.jsx";

import { getTodos } from "../store/slices/todoSlice";

const filterOptions = ["All", "Incomplete", "Completed", "Favourite"];

const Main = () => {
  const todoData = useSelector(getTodos());
  const [filterOpt, setFilterOpt] = useState(filterOptions[0]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filteredData = todoData;
    if (filterOpt === "Completed") {
      filteredData = todoData?.filter((todo) => todo.isComplete === "true");
    } else if (filterOpt === "Incomplete") {
      filteredData = todoData?.filter((todo) => todo.isComplete === "false");
    } else if (filterOpt === "Favourite") {
      filteredData = todoData?.filter((todo) => todo.favourite === "true");
    }

    setFilteredData(filteredData);
  }, [filterOpt, todoData]);

  return (
    <div className="container-fluid bg-secondary p-5 ">
      <div className="container bg-white rounded-3 p-5 mb-5 d-flex flex-column align-items-center ">
        <div className="row">
          <h2>Todo List</h2>
        </div>
        <div className="row col-8 justify-content-between">
          <div className="col-3">
            <AddTodo />
          </div>
          <div className="col-3 text-end">
            <Filter filterOptions={filterOptions} setOption={setFilterOpt} />
          </div>
        </div>
        <div className="row col-8 py-3">
          <ToDoList filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Main;
