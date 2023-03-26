import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Detalle from "./pages/Detalle";
import { PizzaProvider } from "./contexts/PizzaContext";
import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Carrito from "./pages/Carrito";

const App = () => {    
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <PizzaProvider>
          <NavBar></NavBar>
          <Banner></Banner>
          <Routes>
          {/* <Route path="/pokes/:name" element={<Pokes />} />      */}
            <Route path="/" element={<Home />} />
            <Route path="detalle/:id" element={<Detalle />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PizzaProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
