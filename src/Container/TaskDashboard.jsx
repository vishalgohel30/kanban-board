import React, { memo } from "react";
import { DraggableElement, Droppable } from "../Component";

const TaskDashboard = ({ titleName, color, colData, handleAction }) => {
  return (
    <div className="w-25 m-1 task-card"  style={{ borderTop: `5px solid ${color}` }}>
      <div className="task-card-body">
        <h4 style={{ top: "9px", position: "relative" }}>{titleName}</h4>
      </div>
      <div>
        <Droppable id={titleName}>
          {colData.map((colObj, elmIndex) => (
            <DraggableElement
              handleAction={(type) => handleAction({ type, row: colObj })}
              key={`draggable-element-${elmIndex}-${titleName}`}
              {...colObj}
            />
          ))}
          <div
            style={{
              height: "240px",
              backgroundColor: "transparent",
              marginTop: 15,
            }}
          />
        </Droppable>
      </div>
    </div>
  );
};

export default memo(TaskDashboard);
