import { fireEvent, render, screen } from "@testing-library/react";
import { DraggableElement } from "../../Component";

const findDomElementLabel = (str) => screen.getByLabelText(str);

const findText = (str) => screen.getByText(str);

const props = {
  handleAction: jest.fn(),
  title: "test",
  priority: "Low priority",
  status: "Backlog",
  description: "test des",
  id: 1,
};

describe("Render DraggableElement component", () => {
  test("Should pass props in DraggableElement component & delete item. ", () => {
    render(<DraggableElement {...props} />);
    expect(findText(props.title)).toBeInTheDocument();
    expect(findText(props.priority).textContent).toBe(props.priority);
    expect(findText(props.description)).toBeInTheDocument();
    fireEvent.click(findDomElementLabel("delete-icon"));
    expect(findDomElementLabel("delete-icon")).toBeInTheDocument();
  });
});
