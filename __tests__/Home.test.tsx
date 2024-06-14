import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero", () => {
  it("Key word in the Hero section", () => {
    render(<Hero />);

    const text = screen.getByText("Photographer");
    expect(text).toBeInTheDocument();
  });
  it("Key word in the Hero section", () => {
    render(<Hero />);

    const text = screen.getByText("Travel");
    expect(text).toBeInTheDocument();
  });
});
