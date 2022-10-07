import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render 'It's good to see you!' initialy", () => {
    // Arrange
    render(<Greeting />);

    // Assert
    expect(screen.getByText("It's good to see you!")).toBeDefined();
  });

  test("render 'Changed!' when the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button", { name: "Changed text!" });
    userEvent.click(button);

    // Assert
    expect(screen.getByText("Changed!")).toBeDefined();
  });

  test("don't render 'It's good to see you!' when the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button", { name: "Changed text!" });
    userEvent.click(button);

    // Assert
    expect(screen.queryByText("good to see you!", { exact: false })).toBeNull();
  });
});
