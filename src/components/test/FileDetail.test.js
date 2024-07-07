import React from "react";
import { render, screen } from "@testing-library/react";
import FileDetail from "../FileDetail";

test("renders file details", () => {
  const fileData = [
    { text: "example text 1", number: 123, hex: "abc123" },
    { text: "example text 2", number: 456, hex: "def456" },
  ];

  render(<FileDetail fileData={fileData} />);

  fileData.forEach((line) => {
    expect(screen.getByText(line.text)).toBeInTheDocument();
    expect(screen.getByText(line.number.toString())).toBeInTheDocument();
    expect(screen.getByText(line.hex)).toBeInTheDocument();
  });
});
