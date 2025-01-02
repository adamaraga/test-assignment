// import checkedIcon from "../assets/images/checked.svg";
import { ReactComponent as CheckedIcon } from "../assets/images/checked.svg";

const CheckItem = ({ label, handleChange, checked }) => {
  return (
    <li className="checkItem">
      <label htmlFor={label} className="checkItem__label">
        {label}

        <input
          type="checkbox"
          id={label}
          checked={checked}
          onChange={handleChange}
        />
        <span>
          <CheckedIcon />
        </span>
      </label>
    </li>
  );
};

export default CheckItem;
