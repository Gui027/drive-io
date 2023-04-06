import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import PoliticaPrivacidade from './pages/Políticas de Privacidade';
import GlobalStyle from './styles/global';
import PageNotFound from './pages/Page Not Found';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politicas" element={<PoliticaPrivacidade />} />
        <Route path="/testando" element={<Home />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
