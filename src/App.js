import React from 'react';
import Layout from './components/Layout/Layout';
import './App.css'
import './components/FontAwesomeIcon'
import {BrowserRouter} from 'react-router-dom'
import ProgressBar from './container/ProgressBar'
function App() {
  return (
    <BrowserRouter>
    <Layout/> 

    </BrowserRouter>
          
  );
}

export default App;
