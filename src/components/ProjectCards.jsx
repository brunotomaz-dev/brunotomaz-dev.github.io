import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dataFundamentos from '../data/fundamentos';
import { fundamentosAction } from '../redux/actions/actions';
import Card from './Card';

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
        <section className="card">
          <Card className="project-card link-hover" />
        </section>
        <h3><a href="https://brunotomaz-dev.github.io/project-pixels-art/" target="_blank" rel="noreferrer">Pixels Art</a></h3>
        <h3><a href="https://brunotomaz-dev.github.io/project-todo-list/" target="_blank" rel="noreferrer">Todo List</a></h3>
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
