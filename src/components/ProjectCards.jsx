import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import dataBackEnd from '../data/backEnd';
import dataFrontEnd from '../data/frontEnd';
import dataFundamentos from '../data/fundamentos';
import {
  backEndAction,
  frontEndAction,
  fundamentosAction,
} from '../redux/actions/actions';
import Card from './Card';

class ProjectCards extends React.Component {
  componentDidMount() {
    this.createData();
  }

  createData = () => {
    const { dispatchFundamentos, dispatchFrontEnd, dispatchBackEnd } = this.props;
    dispatchFundamentos(dataFundamentos);
    dispatchFrontEnd(dataFrontEnd);
    dispatchBackEnd(dataBackEnd);
  };

  render() {
    const { fundamentos, frontEnd, backEnd } = this.props;
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
        <h1>Back-End</h1>
        <section className="card">
          <Card bloco={ backEnd } />
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFundamentos: (project) => (dispatch(fundamentosAction(project))),
  dispatchFrontEnd: (project) => (dispatch(frontEndAction(project))),
  dispatchBackEnd: (project) => (dispatch(backEndAction(project))),
});

const mapStateToProps = (store) => ({
  fundamentos: store.projectReducer.fundamentos,
  frontEnd: store.projectReducer.frontEnd,
  backEnd: store.projectReducer.backEnd,
});

ProjectCards.propTypes = {
  dispatchFundamentos: PropTypes.func.isRequired,
  dispatchFrontEnd: PropTypes.func.isRequired,
  fundamentos: PropTypes.arrayOf(Object).isRequired,
  frontEnd: PropTypes.arrayOf(Object).isRequired,
  backEnd: PropTypes.arrayOf(Object).isRequired,
  dispatchBackEnd: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCards);
