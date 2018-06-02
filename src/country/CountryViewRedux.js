import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCountry, editCountryCode } from "./actions";

const CountryViewRedux = ({
  code,
  fetching,
  country,
  onSubmit,
  onTextChange
}) => (
  <div>
    <form onSubmit={onSubmit}>
      <input type="text" value={code} onChange={onTextChange} />
      <button type="submit" disabled={fetching}>
        {fetching ? "Fetching..." : "Search"}
      </button>
    </form>
    <pre>{JSON.stringify(country)}</pre>
  </div>
);

CountryViewRedux.propTypes = {
  code: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  country: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  code: state.code,
  fetching: state.fetching,
  country: state.country
});

const mapDispatchToProps = dispatch => ({
  onSubmit: event => {
    event.preventDefault();
    dispatch(fetchCountry());
  },
  onTextChange: event => dispatch(editCountryCode(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryViewRedux);
