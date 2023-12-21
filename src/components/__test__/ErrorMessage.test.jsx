import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage", () => {
  it("renders the error message", () => {
    const testMessage = "Error occurred";
    render(<ErrorMessage message={testMessage} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
