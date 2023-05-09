import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class CardFrontEnd extends React.Component {
  render() {
    const { frontEnd } = this.props;
    return (
      <>
        {frontEnd.map((project) => {
          const { nome, page, github, tecnologias, detalhes } = project;
          return (
            <div key={ nome } className="project-card link-hover">
              <h3>{nome}</h3>
              <ul className="project-list">
                <i>Tecnologias Usadas:</i>
                {tecnologias.map((tech) => <li className="tech" key={ tech }>{tech}</li>)}
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
  frontEnd: store.projectReducer.frontEnd,
});

CardFrontEnd.propTypes = {
  frontEnd: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(CardFrontEnd);
