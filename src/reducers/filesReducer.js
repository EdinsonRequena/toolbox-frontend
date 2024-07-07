const initialState = {
  files: [],
  selectedFile: null,
  fileData: [],
  error: null,
  loading: false,
};

/**
 * Reducer function for managing files state.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action object.
 * @returns {Object} - The updated state.
 */
const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILES":
      return { ...state, files: action.payload };
    case "SET_SELECTED_FILE":
      return { ...state, selectedFile: action.payload };
    case "SET_FILE_DATA":
      return { ...state, fileData: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default filesReducer;
