import styles from "./ComponentA.module.css";

function ComponentA() {
  return (
    <>
      <h1 className={`${styles.title} ${styles.second_class}`}>Testo</h1>
    </>
  );
}

export default ComponentA;
