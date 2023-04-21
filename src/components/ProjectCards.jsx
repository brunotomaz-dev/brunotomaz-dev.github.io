import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import dataFrontEnd from '../data/frontEnd';
import dataFundamentos from '../data/fundamentos';
import { frontEndAction, fundamentosAction } from '../redux/actions/actions';
import CardFrontEnd from './CardFrontEnd';
import CardFundamentos from './CardFundamentos';

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
    return (
      <>
        <h1>Fundamentos de Desenvolvimento Web</h1>
        <section className="card">
          <CardFundamentos />
        </section>
        <h1>Front-End</h1>
        <section className="card">
          <CardFrontEnd />
        </section>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFundamentos: (project) => (dispatch(fundamentosAction(project))),
  dispatchFrontEnd: (project) => (dispatch(frontEndAction(project))),
});

ProjectCards.propTypes = {
  dispatchFundamentos: PropTypes.func.isRequired,
  dispatchFrontEnd: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProjectCards);
