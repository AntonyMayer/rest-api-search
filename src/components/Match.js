import React from 'react';
import PropTypes from 'prop-types';

// Class names for Matches component
const selectors = {
    block: 'Matches',
};

/**
 * Matches
 * Display a grouped list of matches
 * @param {string} $props.display_name - name for matches' group
 * @param {Array} $props.matches - list of matches
 */
const Matches = ({ display_name, matches }) => (
    <div className={selectors.block} key={display_name}>
        <div>Matches in <strong>{display_name}</strong>:</div>
        <ul>
            {matches.map(match => <li 
                key={match}
                dangerouslySetInnerHTML={{__html: match}} />)}
        </ul>
    </div>
);

Matches.propTypes = {
    display_name: PropTypes.string.isRequired,
    matches: PropTypes.array.isRequired,
};

export default Matches;
