import styles from "./AddCard.module.scss";

export default function AddCard({
  addClick,
  isAddMode,
}: {
  addClick: () => void;
  isAddMode: boolean;
}) {
  return (
    <div className={styles.addContainer}>
      {isAddMode ? (
        <>
          <button className={styles.primary}>Add Card</button>
          <span className={styles.exit} onClick={() => addClick()}>
            X
          </span>
        </>
      ) : (
        <button className={styles.addBtn} onClick={() => addClick()}>
          <span className={styles.symbol}>+</span>Add Card
        </button>
      )}
    </div>
  )  ;
}