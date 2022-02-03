import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FilmPopulaire from './pages/FilmsPopulaire';
import Description from './pages/Description';

function App() {
  return <>
    <React.Suspense fallBack = {<span>Loading...</span>}>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/films" element={<FilmPopulaire />} />
            <Route exact path="/films/:id" element={<Description />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Suspense>
  </>;
}
export default App;
