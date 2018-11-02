import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

 class Navigation extends Component {
  render() {
    const { data: { received } } = this.props;

    if (!received) return false;
    else return (
      <div>
          {received.results.length}
      </div>
    );
  }
}

Navigation.propTypes = {
  data: PropTypes.object
};

Navigation.defaultProps = {
	data: { received: null },
};

const mapStateToProps = store => ({ data: store.data });

export default connect(mapStateToProps, null)(Navigation);
