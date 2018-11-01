import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

 class Table extends Component {
  render() {
    const { data: { received } } = this.props;
    console.log(received); // eslint-disable-line

    if (!received) return false;
    else return (
      <div>
        {received.results.map(record => {
          return (
            <div>
              {record.id}
            </div>
          );
        })}
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object
};

Table.defaultProps = {
	data: { received: null },
};

const mapStateToProps = store => ({ data: store.data });

export default connect(mapStateToProps, null)(Table);
