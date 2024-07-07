import React from "react";
import { ListGroup } from "react-bootstrap";

/**
 * Renders a list of files.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.files - The array of file names.
 * @param {Function} props.onFileClick - The function to be called when a file is clicked.
 * @returns {JSX.Element} The rendered file list component.
 */
const FileList = ({ files, onFileClick }) => {
  return (
    <ListGroup variant="flush" className="mt-3">
      {files.map((file) => (
        <ListGroup.Item
          key={file}
          onClick={() => onFileClick(file)}
          action
          className="border-secondary"
          variant="dark"
        >
          {file}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default FileList;
