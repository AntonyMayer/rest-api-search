import React from 'react';
import PropTypes from 'prop-types';

const selectors = {
    block: 'Matches',
};

const Matches = ({ display_name, matches }) => (
    <div className={selectors.block} key={display_name}>
        <div>Matches in <strong>{display_name}</strong>:</div>
        <ul>
            {matches.map(match => <li 
                key={match}
                dangerouslySetInnerHTML={{__html: match}}></li>)}
        </ul>
    </div>
);

Matches.propTypes = {
    display_name: PropTypes.string.isRequired,
    matches: PropTypes.array.isRequired,
};

export default Matches;
