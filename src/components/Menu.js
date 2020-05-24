import React from 'react';
import logo from '../assets/img/logo.png';
import Router from '../Router';

class Menu extends React.Component {
    
    render(){
        return (
            <nav>
                <ul className="menu">
                    <li><a>Inicio</a></li>
                    <li><a>Misión</a></li>
                    <li><a>Nosotros</a></li>
                    <li><a>Contacto</a></li>
                </ul>
                <img src={logo} className="logo" alt="logo" />
            </nav>
        );
    }
}

export default Menu;

