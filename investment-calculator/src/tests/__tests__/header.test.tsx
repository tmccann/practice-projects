import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("header component", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("renders header component", () => {
    // check if header exist in dom
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
  test("renders header with correct text", () => {
    // check that the text "investment Calculator"
    const title = screen.getByRole("heading", {
      name: "Investment Calculator",
    });
    expect(title).toBeInTheDocument();
  });
  test("renders image with correct alt text", () => {
    // / Check for the <img> with the alt text "Money bag surrounded by gold coin stacks ".
    const logo = screen.getByAltText(
      "Money bag surrounded by gold coins stacks"
    );
    expect(logo).toBeInTheDocument();
  });
});
