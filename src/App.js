import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Detail from './Routes/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:id" element={<Detail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
