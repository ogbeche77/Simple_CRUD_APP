import Imprint from "../Imprint";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";

test("should render imprint component", () => {
  const sampleTest = "I am a sampleTester";

  const div = document.createElement("div");
  render(<Imprint sampleTest={sampleTest} />, div);
  const imprintComponent = screen.getByTestId("sample-item");
  expect(imprintComponent).toBeInTheDocument();
  expect(imprintComponent).toHaveTextContent("I am a sampleTester");
  expect(imprintComponent).toContainHTML("div");
});

it("matches imprint component snapshot", () => {
  const sampleTest = "I am a sampleTester";
  const imprintSnapshot = TestRenderer.create(
    <Imprint sampleTest={sampleTest}></Imprint>
  ).toJSON();
  expect(imprintSnapshot).toMatchSnapshot();
});
