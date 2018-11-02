import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchData } from '../globals/api';
import { storeData } from '../actions';

// CSS Selectors for Search component
const selectors = {
	block: 'Search',
	input: 'Search__input',
	label: 'Search__label',
	label_active: 'Search__label--active',
};

/**
 * Search
 * Renders search input
 * @param {Function} $props.storeData - fetch and store results' data
 */
class Search extends PureComponent {
	constructor(props) {
		super(props);

		// Create a ref for label and input to apply active modifiers on focus
		this.label = React.createRef();
		this.input = React.createRef();

		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
	}

	/**
	 * handleFocus
	 * On focus/blur check if input is not empty and add/remove active modifiers from label
	 * @param {boolean} predicate - true/flase on focus/blur
	 */
	handleFocus(predicate = true) {
		predicate || this.input.current.value
			? this.label.current.classList.add(selectors.label_active)
			: this.label.current.classList.remove(selectors.label_active);
	}
	
	/**
	 * handleChange
	 * On input value change send a request to server
	 * When response is received update store
	 * @param {Event} event 
	 */
	handleChange(event) {
		let { storeData } = this.props;
		let query = event.target.value;

		// send request to server and store results
		fetchData(query).then(results => storeData({ query, results } ))
			.catch(e => console.log(e));
	}

	render() {
		return (
			<div className={selectors.block}>
				<input className={selectors.input}
					onFocus={this.handleFocus}
					onBlur={() => this.handleFocus(false)}
					onChange={this.handleChange} 
					type='text' 
					name='search'
					autoComplete='off' 
					ref={this.input}/>
				<label className={selectors.label} 
					htmlFor='search' 
					ref={this.label}>
					Type here
				</label>
			</div>
		);
	}
}

Search.propTypes = {
	storeData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	storeData: payload => {
		dispatch(storeData(payload));
	}
});

export default connect(null, mapDispatchToProps)(Search);
