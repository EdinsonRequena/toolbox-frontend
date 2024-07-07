import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  FormControl,
  Alert,
} from "react-bootstrap";
import FileList from "../components/FileList";
import FileDetail from "../components/FileDetail";
import { fetchFiles, fetchFileData } from "../services/api";

const Home = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState([]);
  const [searchFile, setSearchFile] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFiles = async () => {
      try {
        const files = await fetchFiles();
        setFiles(files);
      } catch (error) {
        console.error(error);
      }
    };

    getFiles();
  }, []);

  const handleFileClick = async (fileName) => {
    setSelectedFile(fileName);
    setError(null);
    try {
      const data = await fetchFileData(fileName);
      setFileData(data.lines);
    } catch (error) {
      setFileData([]);
      setError(error.message);
      console.error(error);
    }
  };
  const filteredFiles = files.filter((file) =>
    file.toLowerCase().includes(searchFile.toLowerCase())
  );

  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <NavbarBrand>ToolBox Test App</NavbarBrand>
        </Container>
      </Navbar>
      <Container className="text-light p-3">
        <Row>
          <Col md={4}>
            <h2>Files</h2>
            <FormControl
              type="text"
              placeholder="Search files"
              className="mb-3"
              onChange={(e) => setSearchFile(e.target.value)}
            />
            {error && <Alert variant="danger">{error}</Alert>}
            <FileList files={filteredFiles} onFileClick={handleFileClick} />
          </Col>
          <Col md={8}>
            <h2>File Details</h2>
            {selectedFile && <FileDetail fileData={fileData} />}
            {selectedFile && fileData.length === 0 && (
              <Alert variant="info">
                No data available for the selected file.
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
