import SimonGame from "./components/SimonGame";
import RegisterModal from './components/ModalUsuario';
import Footer from './components/footer';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [showModal] = useState(true);
  return (
    <div className="app">
    <div className="content">
    <Navbar />
      <RegisterModal show={showModal}  />
      <SimonGame/>
  </div>
    <footer className="footer">
    <Footer />
    </footer>
</div>
); ;}

export default App;
