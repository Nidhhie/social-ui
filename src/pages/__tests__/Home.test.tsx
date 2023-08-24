import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Home from "./../Home";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const Wrapper = () => {
  return (
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
};

describe("Home Component", () => {
  test("renders header with correct content", () => {
    render(<Wrapper />);
    const headerElement = screen.getByText(/Hello/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders CreatePostBox", () => {
    render(<Wrapper />);
    const createPostBoxElement = screen.getByTestId("create-post-box");
    expect(createPostBoxElement).toBeInTheDocument();
  });

  test("renders PostBox for each post", () => {
    render(<Wrapper />);
    const postBoxElements = screen.getAllByTestId("post-box");
    expect(postBoxElements.length).toBe(3);
  });
});
