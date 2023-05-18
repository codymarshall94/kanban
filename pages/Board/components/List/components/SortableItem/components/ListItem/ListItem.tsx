import styles from "./Listitem.module.scss";

export default function ListItem({ itemName }: { itemName: string }) {
  return <div className={styles.listItem}>{itemName}</div>;
}
