import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

 class Counter extends Component {
  render() {
    console.log(this.props); // eslint-disable-line
    const { data } = this.props;

    return (
      <div>
        <div>{data.query}</div>
        <div>{data.filter}</div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number
};

Counter.defaultProps = {
	resetLabel: "RESET",
};

const mapStateToProps = store => ({ data: store.data });

export default connect(mapStateToProps, null)(Counter);
