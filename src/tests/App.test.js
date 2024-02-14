import { render, screen } from "@testing-library/react";
import App from "../components/App";
import React from "react";

test("renders Weather App test", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
