import React from 'react';
import PropTypes from 'prop-types';

import Match from './Match';

const selectors = {
    block: 'Record',
};

const Record = ({id, study, explanation, type}) => {
    // if (!received) return false;
    return (
        <div className={selectors.block} key={id}>
            <div>Study: {study.name}</div>
            <div>Date: {study.study_date}</div>
            <div>
                {explanation.map(match => <Match {...match} key={match.display_name}/>)}
            </div>
            {/* <div>{type} {record[type]}</div> */}
        </div>
    );
};

Record.propTypes = {
    explanation: PropTypes.array,

};
  
Record.defaultProps = {
    // explanation: PropTypes.array,
};

export default Record;
