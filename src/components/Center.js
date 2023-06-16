import React, { useState } from "react";
import "./App.css";
import Item from "./Item";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Center = () => {
  const items = ["image", "button", "TextView"];
  //   const [itemsList, updateitemsList] = useState(items);
  //   const handleDragOn = (result) => {
  //     log;
  //   };
  return (
    <div className="Center">
      <DragDropContext>
        <Droppable droppableId="droppable-items">
          {(provided) => (
            <ul
              className="items"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => {
                return (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <li
                        className="item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Item item={item} />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Center;
