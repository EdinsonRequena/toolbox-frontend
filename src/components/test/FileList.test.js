import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FileList from "../FileList";

test("renders file list and handles click", () => {
  const files = ["file1.csv", "file2.csv"];
  const handleFileClick = jest.fn();

  render(<FileList files={files} onFileClick={handleFileClick} />);

  files.forEach((file) => {
    expect(screen.getByText(file)).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText("file1.csv"));
  expect(handleFileClick).toHaveBeenCalledWith("file1.csv");
});
