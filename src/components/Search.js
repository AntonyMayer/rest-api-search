import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchData, filterData, resetData } from '../actions';

class Search extends Component {
	constructor(props) {
		super(props);

		this.label = React.createRef();

		this.handleChange = this.handleChange.bind(this);
	}

	handleFocus(predicate) {
		predicate 
			? this.label.current.classList.add('Search__label--active')
			: this.label.current.classList.remove('Search__label--active');
	}
	
	handleChange() {
		const { fetchData } = this.props;
		
		fetchData();
	}


	render() {
		console.log(this.props); // eslint-disable-line
		return (
		<div className="Search">
			<input className="Search__input"
				onFocus={() => this.handleFocus(true)}
				onBlur={() => this.handleFocus(false)}
				onChange={this.handleChange} 
				type="text" 
				name="search" 
				autocomplete="off" />
			<label className="Search__label" htmlFor="search" ref={this.label}>Type here</label>
		</div>
		);
	}
}

Search.propTypes = {
	fetchData: PropTypes.func,
	filterData: PropTypes.func,
};



const mapStateToProps = store => ({ count: store.count });
const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => {
			dispatch(fetchData());
		},
		filterData: () => {
			dispatch(filterData());
		},
		resetData: payload => {
			dispatch(resetData(payload));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
