import { render } from "@testing-library/react";
import Header from "../../components/Header";

describe("header component", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("renders header component", () => {
    // check if header exist in dom
  });
  test("renders header with correct text", () => {
    // check that the text "investment Calculator"
  });
  test("renders image with correct alt text", () => {
    // / Check for the <img> with the alt text "Money bag surrounded by gold coin stacks ".
  });
});
