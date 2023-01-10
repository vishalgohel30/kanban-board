import React, { useCallback, useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { toast } from "react-toastify";
import { COLUMNS, handleCallBackDragEnd, webApiLS } from "../Utils";
import TasDashboard from "./TaskDashboard";
import TaskForm from "./TaskForm";

export default function Container() {
  const [data, setData] = useState([]);
  const [editObj, setEditObj] = useState({});
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    setData(webApiLS({ keyName: "taskList" }));
  }, []);

  const onDragEnd = useCallback(
    ({ active, over }) => {
      setData(handleCallBackDragEnd({active, over,data}));
    },
    [data, setData]
  );

  const handleSubmit = (stateObj) => {
    const match = data.find((a) => a.id === stateObj.id);
    if (match) {
      match.title = stateObj.title;
      match.description = stateObj.description;
      match.priority = stateObj.priority;
      match.status = stateObj.status;
    } else {
      data.push({
        ...stateObj,
        id: data?.length ? data[data.length - 1].id + 1 : 1,
      });
    }
    setData([...data]);
    webApiLS({ keyName: "taskList", data });
    onHide();
    toast.success(`Task ${match?.id ? "updated" : "added"} successfully.`);
  };

  const handleAction = ({ type, row }) => {
    if (type === "delete") {
      const taskList = data.filter((a) => a.id !== row.id);
      setData(taskList);
      webApiLS({ keyName: "taskList", data:taskList });
      toast.success("Task deleted successfully.");
      return;
    }
    setEditObj(row);
    setModalShow(true);
  };

  const onHide = () => {
    setEditObj({});
    setModalShow(false);
  };

  return (
    <>
      <TaskForm
        show={modalShow}
        handleSubmit={handleSubmit}
        editObj={editObj}
        onHide={onHide}
      />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12 mb-2">
            <button
              className="btn btn-primary btn-lg "
              style={{ float: "right" }}
              type="submit"
              onClick={() => setModalShow(true)}
            >
              + Add Task
            </button>
          </div>
        </div>
        <DndContext onDragEnd={onDragEnd}>
          <div
            className="d-flex justify-content-between "
            style={{ height: "158vh" }}
          >
            {COLUMNS.map((colObj, columnIndex) => (
              <TasDashboard
                key={`column-${columnIndex}`}
                handleAction={handleAction}
                {...colObj}
                colData={(data).filter(
                  (a) => a?.status === colObj.titleName
                )}
              />
            ))}
          </div>
        </DndContext>
      </div>
    </>
  );
}
