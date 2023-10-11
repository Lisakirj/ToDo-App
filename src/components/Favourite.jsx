import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFavouriteStatus } from "../store/slices/todoSlice";

import { BsFillHeartFill } from "react-icons/bs";

const Favourite = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      {todo.favourite === "true" ? (
        <BsFillHeartFill
          size={15}
          style={{ color: "red", margin: "10px", cursor: "pointer" }}
          onClick={() => {
            dispatch(setFavouriteStatus({ id: todo.id, status: "false" }));
          }}
          className="custom-icons"
          title="Remove from favourites."
        />
      ) : (
        <BsFillHeartFill
          size={15}
          style={{ color: "gray", margin: "10px", cursor: "pointer" }}
          onClick={() => {
            dispatch(setFavouriteStatus({ id: todo.id, status: "true" }));
          }}
          className="custom-icons"
          title="Add to favourites."
        />
      )}
    </>
  );
};
Favourite.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    favourite: PropTypes.string.isRequired,
  }).isRequired,
};

export default Favourite;
