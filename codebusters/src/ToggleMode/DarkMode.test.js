import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DarkMode from "./DarkMode";


test("renders dark mode component", () => {
  render(<DarkMode />);

 
  const inputElement = screen.getByRole("checkbox");
  expect(inputElement).toBeInTheDocument();
});


test("toggles dark mode", () => {
    render( /*#__PURE__*/React.createElement(DarkMode, null));
    const inputElement = screen.getByRole("checkbox"); // 4
  
    expect(inputElement.checked).toEqual(false);
    fireEvent.click(inputElement);
    expect(inputElement.checked).toEqual(true); // 5
  
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });