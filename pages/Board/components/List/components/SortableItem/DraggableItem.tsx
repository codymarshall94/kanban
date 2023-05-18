import ListItem from "./components/ListItem";
import { Draggable } from "react-beautiful-dnd";

export default function SortableItem({
  itemName,
  index,
}: {
  itemName: string;
  index: number;
}) {
  return (
    <Draggable key={itemName} draggableId={itemName} index={index}>
      {(provided: any) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListItem itemName={itemName} />
        </div>
      )}
    </Draggable>
  );
}
