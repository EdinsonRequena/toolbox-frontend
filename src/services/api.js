const API_BASE_URL = "http://localhost:3000/api";

/**
 * Fetches files from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of files.
 * @throws {Error} If there is an error fetching the files.
 */
export const fetchFiles = async () => {
  const response = await fetch(`${API_BASE_URL}/files/list`);
  if (!response.ok) {
    throw new Error("Error fetching files");
  }
  const data = await response.json();
  return data;
};

/**
 * Fetches file data from the API.
 * @param {string} fileName - The name of the file to fetch data for.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 * @throws {Error} - If there is an error fetching the data.
 */
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
