import React from 'react';
import PropTypes from 'prop-types';

import Match from './Match';

// Class names for Record component
const selectors = {
    block: 'Record',
};

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
    explanation: PropTypes.array,
    study: PropTypes.object,
};

export default Record;
