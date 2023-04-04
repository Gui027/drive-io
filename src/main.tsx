import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import PoliticaPrivacidade from './pages/Políticas de Privacidade';

import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/politicas-de-privacidade' element={<PoliticaPrivacidade />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
