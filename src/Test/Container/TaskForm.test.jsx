import { fireEvent, render, screen } from "@testing-library/react";
import TaskForm from "../../Container/TaskForm";

const findText = (str) => screen.getByText(str);

const findTestId = (str) => screen.getByTestId(str);

const props = {
  handleSubmit: jest.fn(),
  onHide: jest.fn(),
  show: true,
  editObj: {
    title: "test 1",
    priority: "Low priority",
    status: "Todo",
    description: "sdfsd",
    id: 2,
  },
};

describe("Render TaskForm component", () => {
  test("Should pass props in TaskForm component enter value in the form. create task ", () => {
    const editObj = {
      title: "",
      priority: "",
      status: "",
      description: "",
    };
    render(<TaskForm {...{ ...props, editObj }} />);
    expect(findTestId(/title/i)).toHaveValue("");
    expect(findTestId(/description/i)).toHaveValue("");
    fireEvent.change(findTestId(/title/i), {
      target: { name: "title", value: "Task 1" },
    });
    expect(findTestId(/title/i)).toHaveValue("Task 1");
    expect(findText("Save").textContent).toEqual("Save");
    fireEvent.click(findText("Save"));
    expect(props.handleSubmit).toHaveBeenCalledTimes(1);
  });

  test("Should pass props in TaskForm component Close", () => {
    render(<TaskForm {...props} />);
    expect(findTestId(/title/i)).toHaveValue(props.title);
    expect(findTestId(/description/i)).toHaveValue(props.description);
    fireEvent.change(findTestId(/title/i), {
      target: { name: "title", value: "Task 1" },
    });
    expect(findTestId(/title/i)).toHaveValue("Task 1");
    expect(findText("Close").textContent).toEqual("Close");
    fireEvent.click(findText("Close"));
    expect(props.onHide).toHaveBeenCalledTimes(1);
  });
});
