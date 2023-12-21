import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("calls onSearch when a search is performed", () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test query" } });

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(handleSearch).toHaveBeenCalledWith("test query");
  });
});
