import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Projetos extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h3><Link to="/project-todo-list/">Lessons Learned</Link></h3>
        <h3><Link href="https://orbnumozat.github.io/project-pixels-art/">Pixels Art</Link></h3>
        <h3><Link to="/project-todo-list/">Todo List</Link></h3>
      </div>
    );
  }
}

export default Projetos;
