import SimonGame from "./components/SimonGame";
import RegisterModal from './components/ModalUsuario';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(true);

 
  return (
   
    <div className="app">

    <div className="content">
      <RegisterModal show={showModal}  />

      <SimonGame/>
  </div>
    <footer className="footer">
    <Footer />
    </footer>
</div>
);
   

   ;}

export default App;
