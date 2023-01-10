import { memo, useMemo } from "react";
import { useDraggable } from "@dnd-kit/core";
import { transformCC } from "../../../Utils";

/**
 * This  is Draggable Compenent.
 * @param {number} id Only accept number.
 * @param {function} children accept call back fun.
 * @returns jsx
 */

const Draggable = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = useMemo(() => transformCC({transform}), [transform]);

  return (
    <div ref={setNodeRef} style={style}>
      <div className="card m-2">
        <div className="card-body " style={{ textAlign: "initial" }}>
          {children({ listeners, attributes })}
        </div>
      </div>
    </div>
  );
};

export  default memo(Draggable)