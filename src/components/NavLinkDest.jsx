import React from 'react';
import { Link } from 'react-router-dom';

class NavLinkDest extends React.Component {
  render() {
    return (
      <div className="navLink">
        <h2 className="linkHover"><Link to="/">Quem sou?</Link></h2>
        <h2 className="linkHover"><Link to="/projects">Meus Projetos</Link></h2>
      </div>
    );
  }
}

export default NavLinkDest;
