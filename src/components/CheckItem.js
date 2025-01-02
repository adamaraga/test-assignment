// import checkedIcon from "../assets/images/checked.svg";
import { ReactComponent as CheckedIcon } from "../assets/images/checked.svg";

const CheckItem = ({ label }) => {
  return (
    <li className="checkItem">
      <label htmlFor={label} className="checkItem__label">
        {label}

        <input
          type="checkbox"
          id={label}
          // checked={}
        />
        <span>
          <CheckedIcon />
        </span>
      </label>
    </li>
  );
};

export default CheckItem;
