import { screen, render } from "@testing-library/react";
import SideBar from "../components/SideBar";

const getSideBarElements = () => {
  return {
    sidebar: screen.getByRole("complementary"),
    h2: screen.getByRole("heading", { level: 2 }),
    button: screen.getByRole("button"),
  };
};

describe("sideBar component", () => {
  beforeEach(() => {
    render(<SideBar />);
  });
  test("aside, h2, and button should be rendered, with correct content", () => {});
  test("button should fire handleNewProject on click", () => {});
});
