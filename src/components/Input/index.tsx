import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const Input = forwardRef(
  ({ label, type, error, className, ...rest }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label}>{label}</label>
        <input
          type={type}
          {...rest}
          ref={ref}
          className={`${styles.input} ${
            error ? styles.inputError : ""
          } ${className}`}
        />
        {error ? <p className={styles.errorMessage}>{error.message}</p> : null}
      </div>
    );
  }
);
