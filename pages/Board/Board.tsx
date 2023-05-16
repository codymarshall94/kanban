import styles from "./Board.module.scss";
import List from "./components/List";

const testArray = [
  {
    id: 1,
    name: "MVP Features",
    description: "My Features",
    labels: ["In Progress", "ASAP"],
    createdBy: "Cody Marshall",
    items: [
      {
        id: 1,
        name: "Floating Navbar",
        description: "Make box shadow super cool",
      },
      {
        id: 2,
        name: "Hover Buttons",
        description: "Make them super clickable",
      },
    ],
  },
];

export default function Board() {
  return (
    <div className={styles.board}>
      {testArray.map((item) => (
        <List key={item.name} item={item} />
      ))}
    </div>
  );
}
