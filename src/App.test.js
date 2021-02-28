import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

let test = null;

test("renders app", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // const navElement = screen.curre('Navigation');
  // expect(navElement).toBeInTheDocument();
});
