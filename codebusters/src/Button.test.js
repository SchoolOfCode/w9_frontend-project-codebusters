import React from "react";
import Button from "./Button";
import render from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { isTypeLiteralNode } from "typescript";

test("renders button", () => {
  const { getByText } = render(<Button></Button>);
  const buttonElement = getByText("NPM");
  expect(buttonElement).toBeInTheDocument();
});