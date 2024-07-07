const API_BASE_URL = "http://localhost:3000/api";

export const fetchFiles = async () => {
  const response = await fetch(`${API_BASE_URL}/files/list`);
  if (!response.ok) {
    throw new Error("Error fetching files");
  }
  const data = await response.json();
  return data;
};

export const fetchFileData = async (fileName) => {
  const response = await fetch(
    `${API_BASE_URL}/files/data?fileName=${fileName}`
  );
  if (!response.ok) {
    throw new Error(`Error fetching data for file ${fileName}`);
  }
  const data = await response.json();
  return data;
};
