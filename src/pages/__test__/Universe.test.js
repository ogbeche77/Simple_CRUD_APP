import React from "react";
import ReactDOM from "react-dom";
import Universe from "../Universe";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Universe></Universe>, div);
});

it("renders universe correctly", () => {
  const { getByTestId } = render(<Universe></Universe>);
  expect(getByTestId("universe")).toHaveTextContent("Add a universe");
});

it("matches universe component snapshot", () => {
  const universeSnapshot = renderer.create(<Universe></Universe>).toJSON();
  expect(universeSnapshot).toMatchSnapshot();
});
