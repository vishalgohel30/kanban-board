import React, { memo } from "react";
import  Draggable  from "./Draggable";
import UserAction from "./UserAction";

const colorObj = {
  "Low priority": "#00a2ff57",
  "Medium priority": "#95ffa8e0",
  "High priority": "#ff7e7e",
};

/**
 * This is DraggableElement Compenent.
 * @param {object} props  accept task item.
 * @returns jsx
 */

 function DraggableElement({ title, description, priority, id, handleAction }) {
  return (
    <Draggable id={id}>
      {({ listeners, attributes }) => {
        return (
          <>
            <div style={{ textAlign: "end" }}>
              <UserAction handleAction={handleAction} />
            </div>
            <div className="row " style={{cursor: "all-scroll"}} {...listeners} {...attributes}>
              <div>
                <strong>Title: </strong>
                {title}
              </div>
              <div>
                <strong>Description: </strong>
                {description}
              </div>
              <div
                style={{
                  paddingLeft: "46%",
                  textAlign: "center",
                  marginTop: "9px",
                }}
              >
                <div
                  style={{
                    background: colorObj[priority],
                    borderRadius: "9px",
                  }}
                >
                  {priority}
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Draggable>
  );
}

export default memo(DraggableElement)