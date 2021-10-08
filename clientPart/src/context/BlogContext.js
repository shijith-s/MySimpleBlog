import React, {createContext, useReducer, useContext} from 'react';
import reducer, {initialState} from './Reducer';

export const BlogContext = createContext ();

export const BlogProvider = ({children}) => (
  <BlogContext.Provider value={useReducer (reducer, initialState)}>
    {children}
  </BlogContext.Provider>
);

const BlogContextProvider = () => useContext (BlogContext);

export default BlogContextProvider;
