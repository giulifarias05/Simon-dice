import SimonGame from "./components/SimonGame";
import Navbar from "./components/Nav";
import RegisterModal from './components/ModalUsuario';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShowModal(false);
 
  return (
   
    <div className="app">
            <RegisterModal show={showModal} handleClose={handleClose} />

    <div className="content">
      <Navbar />
      <SimonGame/>
  </div>
    <footer className="footer">
    <Footer />
    </footer>
</div>
);
   

   ;}

export default App;