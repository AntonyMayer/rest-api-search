import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Matches
 * Displays count for current search
 * @param {Object} $props.data.results - current search results 
 */
const Matches = ({ data: { results } }) => {
    if (!results) return false;
    else return <h2 className='Matches'>Matches found: {results.count}</h2>;
};

Matches.propTypes = {
    data: PropTypes.object
  };
  
Matches.defaultProps = {
    data: { results: null },
};

const mapStateToProps = store => ({ data: store.data });

export default connect(mapStateToProps, null)(Matches);
