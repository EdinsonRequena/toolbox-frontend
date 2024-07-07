import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  FormControl,
  Alert,
  Spinner,
} from "react-bootstrap";

import FileList from "../components/FileList";
import FileDetail from "../components/FileDetail";
import {
  getFiles,
  getFileData,
  setSelectedFile,
  setError,
  setFileData,
} from "../actions/filesActions";

const Home = () => {
  const dispatch = useDispatch();
  const { files, selectedFile, fileData, error, loading } = useSelector(
    (state) => state.files
  );

  useEffect(() => {
    dispatch(getFiles(""));
  }, [dispatch]);

  const handleFileClick = async (fileName) => {
    dispatch(setSelectedFile(fileName));
    dispatch(setFileData([]));
    dispatch(getFileData(fileName));
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch(getFiles(searchTerm));
  };

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
              onChange={handleSearch}
            />
            <FileList files={files} onFileClick={handleFileClick} />
          </Col>
          <Col md={8}>
            <h2>File Details</h2>
            {loading && <Spinner animation="border" role="status" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {selectedFile && !error && !fileData.length && !loading && (
              <Alert variant="warning">No data available for this file.</Alert>
            )}
            {selectedFile && !error && fileData.length > 0 && (
              <FileDetail fileData={fileData} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
