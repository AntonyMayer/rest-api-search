import React from 'react';
import PropTypes from 'prop-types';

import Match from './Match';

// Class names for Record component
const selectors = {
    block: 'Record',
    row: 'Record__row',
    header: 'Record__row Record__row--header',
    date: 'Record__row Record__row--date',
    cell: 'Record__cell',
    cell_label: 'Record__cell Record__cell--label',
    cell_link: 'Record__cell Record__cell--link',
    link: 'Record__link',
    icon: 'Record__icon',
    title: 'Record__title',
};

/**
 * Record
 * Display a record that matches search params
 * @param {string} $props.id - record id
 * @param {Object} $props.study - info on matched study
 * @param {Array} $props.explanation - list of matches
 */
const Record = ({id, study, explanation}) => (
    <div className={selectors.block} key={id}>
        <div className={selectors.header}>
            <div className={selectors.cell_label}>Study</div> 
            <a className={selectors.cell_link} 
                href={study.link}
                target='_blank'
                rel='noopener noreferrer'>
                {study.name} 
                <span className={selectors.icon}>&#8599;</span>
            </a>             
        </div>
        <div className={selectors.date}>
            <div className={selectors.cell_label}>Date</div>
            <div className={selectors.cell}>{study.study_date}</div>
        </div>
        {explanation.length > 0 && 
            <h2 className={selectors.title}>Matches in</h2>
        }
        {explanation.map(match => <Match {...match} key={match.display_name}/>)}
    </div>
);

Record.propTypes = {
    id: PropTypes.string.isRequired,
    study: PropTypes.object.isRequired,
    explanation: PropTypes.array.isRequired,
};

export default Record;
