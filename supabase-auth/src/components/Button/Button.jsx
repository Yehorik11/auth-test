import styles from './Button.module.css';

export const Button = ({ children, ...props }) => {
  return (
    <button type={props.type} className={styles.btn} {...props}>
      {children}
    </button>
  );
};
