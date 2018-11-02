import React from 'react';
import PropTypes from 'prop-types';

import Match from './Match';

// Class names for Record component
const selectors = {
    block: 'Record',
};

/**
 * Record
 * Display a record that matches search params
 * @param {string} $props.id - record id
 * @param {Object} $props.study - info on matched study
 * @param {Array} $props.explanation - list of matches
 */
const Record = ({id, study, explanation}) => {
    return (
        <div className={selectors.block} key={id}>
            <div>Study: {study.name}</div>
            <div>Date: {study.study_date}</div>
            <div>
                {explanation.map(match => <Match {...match} key={match.display_name}/>)}
            </div>
        </div>
    );
};

Record.propTypes = {
    id: PropTypes.string,
    study: PropTypes.object,
    explanation: PropTypes.array,
};

export default Record;
