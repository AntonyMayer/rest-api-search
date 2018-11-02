import React from 'react';
import PropTypes from 'prop-types';

// Class names for Matches component
const selectors = {
    block: 'Match',
    group: 'Match__group',
    list: 'Match__list',
    item: 'Match__item',
};

/**
 * Matches
 * Display a grouped list of matches
 * @param {string} $props.display_name - name for matches' group
 * @param {Array} $props.matches - list of matches
 */
const Matches = ({ display_name, matches }) => (
    <div className={selectors.block} key={display_name}>
        <div className={selectors.group}>{display_name}</div>
        <ul className={selectors.list}>
            {matches.map(match => <li 
                className={selectors.item}
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
