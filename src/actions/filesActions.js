import { fetchFiles, fetchFileData } from "../services/api";

export const setFiles = (files) => ({
  type: "SET_FILES",
  payload: files,
});

export const setSelectedFile = (file) => ({
  type: "SET_SELECTED_FILE",
  payload: file,
});

export const setFileData = (data) => ({
  type: "SET_FILE_DATA",
  payload: data,
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const setLoading = (loading) => ({
  type: "SET_LOADING",
  payload: loading,
});

/**
 * Fetches files based on the provided search term.
 *
 * @param {string} searchTerm - The search term to filter the files.
 * @returns {Function} - A function that dispatches actions to update the state.
 */
export const getFiles = (searchTerm) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const files = await fetchFiles(searchTerm);
    dispatch(setFiles(files));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

/**
 * Fetches file data for a given file name.
 * @param {string} fileName - The name of the file to fetch data for.
 * @returns {Promise<void>} - A promise that resolves when the file data is fetched.
 */
export const getFileData = (fileName) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchFileData(fileName);
    dispatch(setFileData(data.lines));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setFileData([]));
  } finally {
    dispatch(setLoading(false));
  }
};
