import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

const initialState = {
  title: "",
  priority: "Low priority",
  status: "Backlog",
  description: "",
};

function TaskForm(props) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (props.editObj.id) setState(props.editObj);
  }, [props.editObj.id]);

  const handleChnage = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleClose = () => {
    props.onHide();
    setState(initialState);
  };

  return (
    <Modal
      show={props.show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props?.editObj?.id ? "Edit" : "Add"} Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              data-testid="title"
              name="title"
              value={state.title}
              onChange={handleChnage}
              placeholder="Please enter title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              data-testid="description"
              name="description"
              value={state.description}
              onChange={handleChnage}
              rows="3"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Priority
            </label>
            <select
              className="form-select"
              value={state.priority}
              onChange={handleChnage}
              name="priority"
              aria-label="priority"
            >
              <option value="Low priority">Low priority</option>
              <option value="Medium priority">Medium priority</option>
              <option value="High priority">High priority</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Status
            </label>
            <select
              className="form-select"
              value={state.status}
              onChange={handleChnage}
              name="status"
              aria-label="status"
            >
              <option value="Backlog">Backlog</option>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.handleSubmit(state);
            setState(initialState);
          }}
        >
          {props?.editObj?.id ? "Update" : "Save"}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClose}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default TaskForm;
