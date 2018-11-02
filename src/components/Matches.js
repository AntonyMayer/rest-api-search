import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Matches
 * Displays count for current search
 * @param {Object} $props.data.received - current search results 
 */
const Matches = ({ data: { received } }) => {
    if (!received) return false;
    else return <h2 className='Matches'>Matches found: {received.count}</h2>;
};

Matches.propTypes = {
    data: PropTypes.object
};
  
Matches.defaultProps = {
    data: {},
};

const mapStateToProps = store => ({ data: store.data });

export default connect(mapStateToProps, null)(Matches);
