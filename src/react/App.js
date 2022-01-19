import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index/index.scss';
import Root__Index from './index/index.js';
import './contents/contents.scss';
import Root__Contents from './contents/contents.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root__Index/>}></Route>
      <Route path="index" element={<Root__Index/>}></Route>
      <Route path="contents/*" element={<Root__Contents/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);