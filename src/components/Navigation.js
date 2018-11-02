import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { navigatePage } from '../globals/api';
import { storeData } from '../actions';
import { RESULTS_PER_PAGE } from '../globals/config';

// Class names for Record component
const selectors = {
	block: 'Navigation',
	btn: 'Navigation__btn',
	page: 'Navigation__page',
};

/**
 * Navigation
 * Displays page navigation if needed
 * @param {Object} $props.received - search results 
 */
class Navigation extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.navigate.bind(this);
		this.printPage = this.printPage.bind(this);
	}

	/**
	 * navigate
	 * Navigate to next or previous page based on direction
	 * @param {string} [direction=next] - accepts: next, previous
	 */
	navigate(direction = 'next') {
		let { storeData } = this.props;
		let query = this.props.received[direction];

		// send request to server and store results
		navigatePage(query).then(results => storeData({ query, results }))
			.catch(e => console.log(e));
	}

	/**
	 * printPage
	 * Returns string to display pagination 
	 * @returns {string}
	 */
	printPage() {
		let { next, count } = this.props.received;
		// calculate total pages
		let pages_total = Math.ceil(count / RESULTS_PER_PAGE);
		// extract next page index from query and decrement it to get current ¯\_(ツ)_/¯
		let next_index = next 
			? --next.match(/page=\d+/)[0].match(/\d+/)[0]
			: pages_total;

		return `${next_index} / ${pages_total}`;
	}
	
	render() {
		let { received } = this.props;
		
		// check if there are any results and navigation buttons are required
		if (!received || !(received.previous || received.next) ) return false;
		else return (
			<div className={selectors.block}>
				<div className={selectors.btn} 
					onClick={() => received.previous && this.navigate('previous')}>
					&#9668; Back
				</div>
				<div className={selectors.page}>
					{this.printPage()}
				</div>
				<div className={selectors.btn} 
					onClick={() => received.next && this.navigate('next')}>
					Next &#9658;
				</div>
			</div>
		);
	}
};

Navigation.propTypes = {
	data: PropTypes.object
};

const mapStateToProps = store => ({ received: store.data.received });

const mapDispatchToProps = dispatch => ({
	storeData: payload => {
		dispatch(storeData(payload));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
