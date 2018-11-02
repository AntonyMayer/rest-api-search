import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Record from './Record';

/**
 * Results
 * Generate list of records from results
 * @param {Object} $props.received - search results 
 */
const Results = ({ received }) => {
	if (!received) return false;
	else return (
		<div className='Results'>
			{received.results.map(record => <Record {...record} key={record.id} />)}
		</div>
	);
};

Results.propTypes = {
	received: PropTypes.object
};

const mapStateToProps = store => ({ received: store.data.received });

export default connect(mapStateToProps, null)(Results);
