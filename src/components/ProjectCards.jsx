import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import dataFrontEnd from '../data/frontEnd';
import dataFundamentos from '../data/fundamentos';
import { frontEndAction, fundamentosAction } from '../redux/actions/actions';
import Card from './Card';

class ProjectCards extends React.Component {
  componentDidMount() {
    this.createData();
  }

  createData = () => {
    const { dispatchFundamentos, dispatchFrontEnd } = this.props;
    dispatchFundamentos(dataFundamentos);
    dispatchFrontEnd(dataFrontEnd);
  };

  render() {
    const { fundamentos, frontEnd } = this.props;
    return (
      <div className="projects">
        <h1>Fundamentos de Desenvolvimento Web</h1>
        <section className="card">
          <Card bloco={ fundamentos } />
        </section>
        <h1>Front-End</h1>
        <section className="card">
          <Card bloco={ frontEnd } />
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFundamentos: (project) => (dispatch(fundamentosAction(project))),
  dispatchFrontEnd: (project) => (dispatch(frontEndAction(project))),
});

const mapStateToProps = (store) => ({
  fundamentos: store.projectReducer.fundamentos,
  frontEnd: store.projectReducer.frontEnd,
});

ProjectCards.propTypes = {
  dispatchFundamentos: PropTypes.func.isRequired,
  dispatchFrontEnd: PropTypes.func.isRequired,
  fundamentos: PropTypes.arrayOf(Object).isRequired,
  frontEnd: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCards);
