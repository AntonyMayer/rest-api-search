import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

 class Table extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <div>{data.query}</div>
        <div>{data.filter}</div>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object
};

Table.defaultProps = {
	data: {},
};

const mapStateToProps = store => ({ data: store.data });

export default connect(mapStateToProps, null)(Table);
