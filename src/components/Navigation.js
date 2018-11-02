import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { navigatePage } from '../globals/api';
import { fetchData } from '../actions';

// Class names for Record component
const selectors = {
	block: 'Navigation',
	btn: 'Navigation__btn',
};

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.navigate = this.navigate.bind(this);
	}

	navigate(direction = 'next') {
		let { fetchData } = this.props;
		let query = this.props.received[direction];

		navigatePage(query).then(results => fetchData({ query, results } ))
			.catch(e => console.log(e));
	} 
	
	render() {
		let { received } = this.props;
		
		if (!received) return false;
		else return (
			<div className={selectors.block}>
				{received.previous &&
					<div className={selectors.btn} onClick={() => this.navigate('previous')}>
						&#9668; Back
					</div>
				}
				{received.next &&
					<div className={selectors.btn} onClick={() => this.navigate('next')}>
						Next &#9658;
					</div>
				}
			</div>
		);
	}
};

Navigation.propTypes = {
	data: PropTypes.object
};

const mapStateToProps = store => ({ received: store.data.received });

const mapDispatchToProps = dispatch => ({
	fetchData: payload => {
		dispatch(fetchData(payload));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
