import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import BlogContextProvider from './context/BlogContext';
import axios from 'axios';

const baseurl = process.env.REACT_APP_BASE_URL;
console.log (baseurl);
const blogRoute = baseurl + '/blogs/allblogs';

function App () {
  const [blogData, dispatch] = BlogContextProvider ();
  useEffect (() => {
    axios
      .get (blogRoute)
      .then (res => {
        console.log (res);
        dispatch ({
          type: 'ADD_BLOGS',
          data: res.data,
        });
      })
      .catch (err => console.log (err.response.error));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/blogpage" component={BlogPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
