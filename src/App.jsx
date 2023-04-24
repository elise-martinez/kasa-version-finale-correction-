import React from 'react';
/* Package pour la création/gestion des routes importées*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import Logement from "./pages/Logement"
import About from "./pages/About"
import NotFoundPage from "./pages/NotFound"

/* Routes de l'application définies ici*/
const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/kasa" element={<Home />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default App;
