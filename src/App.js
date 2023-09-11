import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./App.css"
import Navbar from "./components/NavBar.js";


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway', 
      '-apple-system',
      'BlinkMacSystemFont',
      "'Lato', sans-serif",
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    color: '#fff'
  }
});

const App= () => {

  return (
    <Router >
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <div className="App">
          <Routes>
            <Route path="/"/>
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  )
};

export default App;