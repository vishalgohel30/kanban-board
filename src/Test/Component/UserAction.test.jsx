import { fireEvent, render, screen } from "@testing-library/react";
import { UserAction } from "../../Component";

const findDomElementLabel = (str) => screen.getByLabelText(str);

describe("Render UserAction", () => {
  test("Should renders User Action but don't pass props", () => {
    render(<UserAction />);
    fireEvent.click(findDomElementLabel("edit-icon"));
    fireEvent.click(findDomElementLabel("delete-icon"));
    expect(findDomElementLabel("edit-icon")).toBeInTheDocument();
    expect(findDomElementLabel("delete-icon")).toBeInTheDocument();
  });

  test("Should renders User Action pass handleAction", () => {
    const handleAction = jest.fn();
    render(<UserAction handleAction={handleAction} />);
    fireEvent.click(findDomElementLabel("edit-icon"));
    expect(handleAction).toHaveBeenCalledWith("edit");
    fireEvent.click(findDomElementLabel("delete-icon"));
    expect(handleAction).toHaveBeenCalledWith("delete");
    expect(screen.getByLabelText("edit-icon")).toBeInTheDocument();
    expect(screen.getByLabelText("delete-icon")).toBeInTheDocument();
  });
});
