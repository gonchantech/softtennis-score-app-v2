import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.container} data-testid="loading">
      <div className={styles.spinner} />
    </div>
  );
};
