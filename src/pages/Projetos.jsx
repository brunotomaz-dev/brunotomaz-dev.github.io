import React from 'react';
import Header from '../components/Header';

class Projetos extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h3><a href="https://orbnumozat.github.io/project-lessons-learned/" target="_blank" rel="noreferrer">Lessons Learned</a></h3>
        <h3><a href="https://orbnumozat.github.io/project-pixels-art/" target="_blank" rel="noreferrer">Pixels Art</a></h3>
        <h3><a href="https://orbnumozat.github.io/project-todo-list/" target="_blank" rel="noreferrer">Todo List</a></h3>
      </div>
    );
  }
}

export default Projetos;
