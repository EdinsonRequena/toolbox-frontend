import React from "react";
import { ListGroup } from "react-bootstrap";

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
