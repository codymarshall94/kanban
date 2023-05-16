import styles from "./Listitem.module.scss";

export default function ListItem({ itemName }: { itemName: string }) {
  return <div className={styles.item}>{itemName}</div>;
}
