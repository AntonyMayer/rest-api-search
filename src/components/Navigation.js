import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { navigatePage } from '../globals/api';
import { fetchData } from '../actions';
import { RESULTS_PER_PAGE } from '../globals/config';

// Class names for Record component
const selectors = {
	block: 'Navigation',
	btn: 'Navigation__btn',
	page: 'Navigation__page',
};

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = { page: 1 };

		this.navigate = this.navigate.bind(this);
		this.printPage = this.printPage.bind(this);
	}

	navigate(direction = 'next') {
		let { fetchData } = this.props;
		let { page } = this.state;
		let query = this.props.received[direction];

		page = direction === 'next' ? ++page : --page;

		navigatePage(query).then(results => {
				this.setState({ page })
				fetchData({ query, results });
			})
			.catch(e => console.log(e));
	}

	printPage() {
		let pages_total = Math.ceil(this.props.received.count / RESULTS_PER_PAGE);

		return `${this.state.page} / ${pages_total}`;
	}
	
	render() {
		let { received } = this.props;
		
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
	fetchData: payload => {
		dispatch(fetchData(payload));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
