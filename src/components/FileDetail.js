import React from "react";
import { Table } from "react-bootstrap";

/**
 * Renders a table displaying file details.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.fileData - The array of file data to be displayed.
 * @returns {JSX.Element} The rendered table component.
 */
const FileDetail = ({ fileData }) => {
  return (
    <Table striped bordered hover responsive variant="dark" className="mt-3">
      <thead>
        <tr>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {fileData.map((line, index) => (
          <tr key={index}>
            <td>{line.text}</td>
            <td>{line.number}</td>
            <td>{line.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FileDetail;
