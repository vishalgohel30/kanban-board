import { fireEvent, render, screen } from "@testing-library/react";
import TaskDashboard from "../../Container/TaskDashboard";

const findDomElementLabel = (str) => screen.getByLabelText(str);

const findText = (str) => screen.getByText(str);

const props = {
  handleAction: jest.fn(),
  titleName: "Todo",
  color: "#00a2ff57",
  id: "2",
  colData: [
    {
      title: "sdsdfsd",
      priority: "Low priority",
      status: "Todo",
      description: "sdfsd",
      id: 2,
    },
  ],
};

describe("Render TaskDashboard component", () => {
  test("Should pass props in TaskDashboard component & delete item. ", () => {
    render(<TaskDashboard {...props} />);
    expect(findText(props.titleName).textContent).toBe(props.titleName);
    fireEvent.click(findDomElementLabel("delete-icon"));
    expect(findDomElementLabel("delete-icon")).toBeInTheDocument();
  });
});
