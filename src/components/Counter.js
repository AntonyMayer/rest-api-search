import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Counter
 * Displays count for current search
 * @param {Object} $props.data.received - current search results 
 */
const Counter = ({ data: { received } }) => {
    if (!received) return false;
    else return <h2 className='Counter'>Matches found: {received.count}</h2>;
};

Counter.propTypes = {
    data: PropTypes.object
};
  
Counter.defaultProps = {
    data: {},
};

const mapStateToProps = store => ({ data: store.data });

export default connect(mapStateToProps, null)(Counter);
