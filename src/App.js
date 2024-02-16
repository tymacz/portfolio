import { BrowserRouter as  router,Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import Qui from "./qui";
import Projet from "./projet";
import Reseaux from './reseaux';
import Competence from './competence'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Qui/>} />
        <Route path='/projet' element={<Projet/>} />
        <Route path='/reseaux' element={<Reseaux/>}/>
        <Route path='/competence' element={<Competence/>}/>
      </Routes>
    </div>
  );
}

export default App;