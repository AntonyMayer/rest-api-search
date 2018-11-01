import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchData, resetData } from '../actions';

class Search extends Component {
	constructor(props) {
		super(props);

		this.label = React.createRef();

		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
	}

	handleFocus(predicate = true) {
		predicate || this.props.data.query
			? this.label.current.classList.add('Search__label--active')
			: this.label.current.classList.remove('Search__label--active');
	}
	
	handleChange(event) {
		let { fetchData } = this.props;
		let query = event.target.value;
		fetchData(query);
	}


	render() {
		console.log(this.props); // eslint-disable-line
		return (
		<div className="Search">
			<input className="Search__input"
				onFocus={this.handleFocus}
				onBlur={() => this.handleFocus(false)}
				onChange={this.handleChange} 
				type="text" 
				name="search"
				autoComplete="off" />
			<label className="Search__label" htmlFor="search" ref={this.label}>Type here</label>
		</div>
		);
	}
}

Search.propTypes = {
	fetchData: PropTypes.func,
	resetData: PropTypes.func,
};



const mapStateToProps = store => ({ data: store.data });
const mapDispatchToProps = dispatch => {
	return {
		fetchData: payload => {
			dispatch(fetchData(payload));
		},
		resetData: () => {
			dispatch(resetData());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
