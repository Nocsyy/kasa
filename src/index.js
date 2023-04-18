import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderNav } from "./components/headerNav.js";
import { Acceuil } from "./pages/acceuil.js";
import { Apropos } from "./pages/aPropos.js";
import { Footer } from "./components/footer.js";
import { InfoLogement } from "./pages/infoLogement.js";
import { Error } from "./components/error.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route exact path="/" element={<Acceuil />} />
        <Route exact path="/a-propos" element={<Apropos />} />
        <Route exact path="/info-logement/:id" element={<InfoLogement />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
