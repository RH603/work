import styles from "./Tags.module.css";

function Tags({ values = [] }) {
  return (
    <ul className={styles.tags}>
      {values.map((values) => (
        <li key={values}>{values}</li>
      ))}
    </ul>
  );
}

export default Tags;
