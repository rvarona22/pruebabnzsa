import React from 'react';
import './App.css';
import foto from './assets/img/foto.jpg';

//Componentes a importar
import Menu from './components/Menu';
import Video from './components/Video';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Video/>
      <img src={foto} className="imagen" />
      <div className="clearfix"></div>
      <Footer/>
    </div>
  );
}

export default App;
