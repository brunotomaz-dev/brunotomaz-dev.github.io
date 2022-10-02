import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Card extends React.Component {
  render() {
    const { fundamentos } = this.props;
    return (
      <>
        {fundamentos.map((project) => {
          const { nome, page, github, tecnologias, detalhes } = project;
          return (
            <div key={ nome } className="project-card link-hover">
              <h3>{nome}</h3>
              <ul className="project-list">
                Tecnologias Usadas:
                {tecnologias.map((tech) => <li key={ tech }>{tech}</li>)}
              </ul>
              <p>{detalhes}</p>
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
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (store) => ({
  fundamentos: store.projectReducer.fundamentos,
});

Card.propTypes = {
  fundamentos: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Card);
