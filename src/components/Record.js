import React from 'react';
import PropTypes from 'prop-types';

import Match from './Match';

// Class names for Record component
const selectors = {
    block: 'Record',
    row: 'Record__row',
    row_white: 'Record__row Record__row--bg-white',
    cell: 'Record__cell',
    cell_label: 'Record__cell Record__cell--label',
    cell_link: 'Record__cell Record__cell--link',
    link: 'Record__link',
    icon: 'Record__icon',
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
            <div className={selectors.row_white}>
                <div className={selectors.cell_label}>Study</div> 
                <a className={selectors.cell_link} href={study.link}>
                    {study.name} &#8192;
                </a>             
            </div>
            <div>Date {study.study_date}</div>
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
