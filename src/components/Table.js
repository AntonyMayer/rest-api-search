import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

 class Counter extends Component {
  render() {
    console.log(this.props); // eslint-disable-line
    const { count } = this.props;

    return (
      <div className="counter">
        <div>{count}</div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number
};

Counter.defaultProps = {
	resetLabel: "RESET",
	incrementLabel: "+",
	decrementLabel: "-"
};

const mapStateToProps = store => {
  return {
    count: store.count
  };
};

export default connect(mapStateToProps, null)(Counter);
