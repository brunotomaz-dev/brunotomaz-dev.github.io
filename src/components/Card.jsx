import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const { bloco } = this.props;
    return (
      <>
        {bloco.map((project) => {
          const { nome, page, github, tecnologias, detalhes } = project;
          return (
            <div key={ nome } className="project-card link-hover">
              <h3>{nome}</h3>
              <ul className="project-list">
                <i>Principais Tecnologias:</i>
                {tecnologias.map((tech) => <li className="tech" key={ tech }>{tech}</li>)}
              </ul>
              <p>{detalhes}</p>
              <div>
                {page && (
                  <h4>
                    <a href={ page } target="_blank" rel="noreferrer">
                      Página do Projeto
                    </a>
                  </h4>
                )}
                <h4>
                  <a href={ github } target="_blank" rel="noreferrer">
                    GitHub do Projeto
                  </a>
                </h4>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

Card.propTypes = {
  bloco: PropTypes.arrayOf(Object).isRequired,
};

export default Card;
