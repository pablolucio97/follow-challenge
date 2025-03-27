import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from "./index";

describe("Loading", () => {
  it("Should render Loading component", () => {
    const { getByTestId } = render(<Loading />);
    const loadingComponent = getByTestId("loading-indicator");
    expect(loadingComponent).toBeInTheDocument();
  });
  it("Should render Loading component with custom text", () => {
    const { getByText } = render(<Loading text="Carregando dados da API..." />);
    const loadingText = getByText("Carregando dados da API...");
    expect(loadingText).toBeInTheDocument();
  });
});
