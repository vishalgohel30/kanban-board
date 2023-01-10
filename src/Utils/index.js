export const COLUMNS = [
  { titleName: "Backlog", color: "#ff0000", id: "1" },
  { titleName: "Todo", color: "#00a2ff57", id: "2" },
  { titleName: "In Progress", color: "#0500ff", id: "3" },
  { titleName: "Complete", color: "#00ff2e", id: "4" },
];

export const webApiLS = ({ keyName = "test", data = "" } = {}) => {
  if (data) {
    localStorage.setItem(keyName, JSON.stringify(data));
    return;
  }
  return JSON.parse(localStorage.getItem(keyName)) || [];
};

export const transformCC = ({ transform }) => {
  if (transform) {
    return {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    };
  }
  return undefined;
};

export const opacityCC = ({ isOver }) => ({
  opacity: isOver ? 0.5 : 1,
});

export const handleCallBackDragEnd = ({ active, data, over }) => {
  const elementId = active.id;
  const deepCopy = [...data];
  return deepCopy.map((elm) => {
    if (elm.id === elementId) {
      const status = over?.id ? String(over.id) : elm.status;
      return { ...elm, status };
    }
    return elm;
  });
};
