import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Record from './Record';

class Results extends Component {
	render() {
		const { data: { received } } = this.props;
		console.log(received); // eslint-disable-line

		if (!received) return false;
		else return (
			<div className='Results'>
				{received.results.map(record => <Record {...record} key={record.id} />)}
			</div>
		);
	}
}

Results.propTypes = {
  data: PropTypes.object
};

Results.defaultProps = {
	data: { received: null },
};

const mapStateToProps = store => ({ data: store.data });

export default connect(mapStateToProps, null)(Results);
