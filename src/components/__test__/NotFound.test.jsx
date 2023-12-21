import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "../NotFound";

describe("NotFound", () => {
  it("renders not found message", () => {
    render(<NotFound />);
    expect(screen.getByText("No articles found.")).toBeInTheDocument();
  });
});
