import { memo, useMemo } from "react";
import { useDroppable } from "@dnd-kit/core";
import { opacityCC } from "../../../Utils";

/**
 * This  is Droppable Compenent.
 * @param {number} id Only accept number.
 * @param {JSX} children
 * @returns jsx
 */

export const Droppable = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = useMemo(
    () => (opacityCC({isOver})),
    [isOver]
  );

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default memo(Droppable)