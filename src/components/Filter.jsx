import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

const Filter = ({ filterOptions, setOption }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Status
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {filterOptions.map((opt, i) => {
          return (
            <Dropdown.Item
              // href="#/action-1"
              key={i}
              onClick={() => {
                setOption(opt);
              }}>
              {opt}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
Filter.propTypes = {
  filterOptions: PropTypes.array.isRequired,
  setOption: PropTypes.func.isRequired,
};
export default Filter;
