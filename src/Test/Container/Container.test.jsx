import { fireEvent, render, screen } from "@testing-library/react";
import Container from "../../Container";

const findText = (str) => screen.getByText(str);

const findTestId = (str) => screen.getByTestId(str);

describe("Render Container component Add/Update Form value", () => {
  beforeEach(() => {
    render(<Container />);
    expect(findText("+ Add Task").textContent).toBe("+ Add Task");
    fireEvent.click(findText("+ Add Task"));
  });

  test("Container component create task 1", () => {
    fireEvent.change(findTestId(/title/i), {
      target: { name: "title", value: "Task 1" },
    });
    fireEvent.change(findTestId(/description/i), {
      target: { name: "description", value: "Task description" },
    });
    expect(findText("Save").textContent).toEqual("Save");
    fireEvent.click(findText("Save"));
  });

  test("Container component create task 2. update task and delete task.", () => {
    /**
     * add new task
     */
    fireEvent.change(findTestId(/title/i), {
      target: { name: "title", value: "Task 2" },
    });
    fireEvent.change(findTestId(/description/i), {
      target: { name: "description", value: "Task description" },
    });
    expect(findTestId(/description/i)).toHaveValue("Task description");
    expect(findText("Save").textContent).toEqual("Save");
    fireEvent.click(findText("Save"));

    /**
     * update task
     */
    fireEvent.click(screen.getAllByLabelText("edit-icon")[0]);
    expect(findTestId(/title/i)).toHaveValue("Task 1");
    expect(findTestId(/description/i)).toHaveValue("Task description");

    fireEvent.change(findTestId(/title/i), {
      target: { name: "title", value: "Task is updated 3" },
    });
    fireEvent.change(findTestId(/description/i), {
      target: { name: "description", value: "Task is updated description" },
    });
    expect(findTestId(/description/i)).toHaveValue(
      "Task is updated description"
    );
    expect(findText("Update").textContent).toEqual("Update");
    fireEvent.click(findText("Update"));
    fireEvent.click(screen.getAllByLabelText("delete-icon")[0]);
    expect(screen.getAllByLabelText("delete-icon")[0]).toBeInTheDocument();
});

});
