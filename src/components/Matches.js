import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// CSS Selectors for Matches component
const selectors = {
    block: 'Matches',
    title: 'Matches__title',
};

/**
 * Matches
 * Creates a block with Matches data related to current search
 * @param {Object} $props.data.results - current search results 
 */
const Matches = ({ data: { results } }) => {
    if (!results) return false;

    let { count } = results;

    return (
        <div className={selectors.block}>
            <h2 className={selectors.title}>Matches found: {count}</h2>
        </div>
    );
};

Matches.propTypes = {
    data: PropTypes.object
  };
  
Matches.defaultProps = {
    data: { results: null },
};

const mapStateToProps = store => ({ data: store.data });

export default connect(mapStateToProps, null)(Matches);
