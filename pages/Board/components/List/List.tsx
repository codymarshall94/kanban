"use client";

import { useState } from "react";
import styles from "./List.module.scss";
import AddCard from "./components/AddCard";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";

interface ListItemProp {
  id: number;
  name: string;
  description: string;
}

interface ListProp {
  id: number;
  name: string;
  description: string;
  labels: string[];
  createdBy: string;
  items: ListItemProp[];
}

export default function List({ item }: { item: ListProp }) {
  const [addMode, setAddMode] = useState<boolean>(false);
  const { name, items } = item;

  const handleAddCard = () => {
    setAddMode(!addMode);
  };

  return (
    <div className={styles.list}>
      <ListHeader listName={name} />
      {items.map((i) => (
        <ListItem key={i.id} itemName={i.name} />
      ))}
      {addMode && (
        <div>
          <textarea
            className={styles.listTextArea}
            rows={3}
            placeholder="Enter a title for this card..."
          />
        </div>
      )}
      <AddCard addClick={handleAddCard} isAddMode={addMode} />
    </div>
  );
}
