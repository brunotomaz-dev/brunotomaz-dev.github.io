import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Card extends React.Component {
  render() {
    const { fundamentos } = this.props;
    return (
      <>
        {fundamentos.map((project) => {
          const { nome, page, github, tecnologias, descrição, detalhes } = project;
          return (
            <div key={ nome } className="project-card">
              <h3>{nome}</h3>
              <p>{descrição}</p>
              <ul className="project-list">
                Tecnologias Usadas:
                {tecnologias.map((tech) => <li key={ tech }>{tech}</li>)}
              </ul>
              <p>{detalhes}</p>
              {page && <h4><a href={ page }>Página do Projeto</a></h4>}
              <h4><a href={ github }>GitHub do Projeto</a></h4>
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
