import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardArticle from "../CardArticle";

describe("CardArticle", () => {
  it("renders Card Article correctly", () => {
    const mockArticle = {
      headline: { main: "Test Headline" },
      snippet: "Test Snippet",
      web_url: "https://example.com",
      multimedia: [{ url: "https://example.com/image.jpg" }],
      byline: { original: "Test Author" },
      pub_date: "2021-01-01",
    };

    render(<CardArticle article={mockArticle} />);
    expect(screen.getByText("Test Headline")).toBeInTheDocument();
    expect(screen.getByText("Test Snippet")).toBeInTheDocument();
    expect(screen.getByText("Test Author")).toBeInTheDocument();
    expect(screen.getByText("January 1, 2021")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      `https://www.nytimes.com/${mockArticle.multimedia[0].url}`
    );
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://example.com"
    );
  });
});
