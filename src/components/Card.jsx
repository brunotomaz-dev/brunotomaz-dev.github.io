import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const { bloco } = this.props;
    const charLimit = 250;
    return (
      <>
        {bloco.map((project) => {
          const { nome, page, github, tecnologias, detalhes, image, gif } = project;
          return (
            <div key={ nome } className="project-card link-hover">
              <h3>{nome}</h3>
              <div className="flex">
                <div className={ image && 'project-list-container' }>
                  <ul className="project-list">
                    <i>Principais Tecnologias:</i>
                    {tecnologias.map((tech) => (
                      <li className="tech" key={ tech }>{tech}</li>
                    ))}
                  </ul>
                </div>
                { (image || gif) && (
                  <img
                    src={ gif || image }
                    alt={ nome }
                    className={ gif ? 'project_gif' : 'project_image' }
                  />
                )}
              </div>
              <p
                className={ detalhes.length > charLimit
                  ? 'paragraph-small'
                  : 'paragraph' }
              >
                {detalhes}
              </p>
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
