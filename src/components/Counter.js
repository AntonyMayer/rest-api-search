import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Counter
 * Displays counter for current search
 * @param {Object} $props.data.received - current search results 
 */
const Counter = ({ received }) => {
    if (!received) return false;
    else return <h2 className='Counter'>Matches found: {received.count}</h2>;
};

Counter.propTypes = {
    received: PropTypes.object
};

const mapStateToProps = store => ({ received: store.data.received });

export default connect(mapStateToProps, null)(Counter);
