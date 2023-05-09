import React from 'react';
import perfil from '../images/perfil.jpg';
import NavLinkDest from './NavLinkDest';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <NavLinkDest />
          <section className="hello">
            <p>Olá, me chamo</p>
            <h1>Bruno Diniz Tomaz</h1>
          </section>
          <img className="perfil" src={ perfil } alt="Foto de Bruno" />
        </header>
      </div>
    );
  }
}

export default Header;
