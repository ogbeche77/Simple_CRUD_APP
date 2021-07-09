import React from "react";
import Stars from "../Stars";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";

test("should render star component", () => {
  const div = document.createElement("div");
  render(<Stars />, div);
});

it("renders universe correctly", () => {
  render(<Stars />);
  const starComponent = screen.getByTestId("starsId");
  expect(starComponent).toBeInTheDocument();
  expect(starComponent).toHaveTextContent("Stars");
});
