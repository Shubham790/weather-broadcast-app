import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './component/Weather';
ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById('root'));