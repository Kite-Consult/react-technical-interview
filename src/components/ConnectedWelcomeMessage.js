import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

/**
 * Display a welcome message stored in the Redux store
 */

const ConnectedWelcomeMessage = ({ message }) => <div>{message}</div>;

ConnectedWelcomeMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default connect(
  state => ({ ...state.welcomeMessage }),
  null
)(ConnectedWelcomeMessage);
