import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Button from "./index";

describe("Button", () => {
  it("should render with title", () => {
    const { getByText } = render(<Button title="Testing" />);
    expect(getByText("Testing")).toBeInTheDocument();
  });
  it("should call getUser function", async () => {
    const getUser = vi.fn();
    const { getByText } = render(<Button title="Testing with function" onClick={getUser} />);
    const button = getByText("Testing with function");
    const user = userEvent.setup();
    await user.click(button);
    expect(getUser).toHaveBeenCalled();
  });
});
