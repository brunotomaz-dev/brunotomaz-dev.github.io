import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dataFundamentos from '../data/fundamentos';
import { fundamentosAction } from '../redux/actions/actions';
import CardFundamentos from './CardFundamentos';

class ProjectCards extends React.Component {
  componentDidMount() {
    this.createData();
  }

  createData = () => {
    const { dispatchFundamentos } = this.props;
    dispatchFundamentos(dataFundamentos);
  };

  render() {
    return (
      <>
        <h1>Fundamentos de Desenvolvimento Web</h1>
        <section className="card">
          <CardFundamentos />
        </section>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFundamentos: (project) => (dispatch(fundamentosAction(project))),
});

ProjectCards.propTypes = {
  dispatchFundamentos: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProjectCards);
