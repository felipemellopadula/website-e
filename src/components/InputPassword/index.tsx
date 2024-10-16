import { forwardRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Input } from "../Input";
import styles from "./styles.module.scss";

export const InputPassword = forwardRef(
  ({ label, error, placeholder, className, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true);
    const type = isHidden ? "password" : "text";

    return (
      <div className={styles.inputPasswordContainer}>
        <Input
          label={label}
          type={type}
          error={error}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          className={className}
        />
        <button
          onClick={() => setIsHidden(!isHidden)}
          type="button"
          className={styles.toggleButton}
        >
          {isHidden ? <FaRegEye size={17} /> : <FaRegEyeSlash size={17} />}
        </button>
      </div>
    );
  }
);
