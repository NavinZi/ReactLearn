import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from './Main';
import Register from './Pages/Register';
import ErrorPage from './Pages/ErrorPage'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route index element={<Main/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="*" element={<ErrorPage/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
