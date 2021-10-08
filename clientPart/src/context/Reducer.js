export const initialState = {
  blogs: [],
};

const reducer = (state, action) => {
  console.log (action);
  switch (action.type) {
    case 'ADD_BLOGS':
      return {blogs: action.data};
    default:
      return state;
  }
};

export default reducer;
