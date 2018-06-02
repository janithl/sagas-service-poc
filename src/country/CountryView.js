import React from "react";

import CountryService from "./CountryService";

class CountryView extends React.Component {
  state = { code: "", fetching: false, country: {} };

  onSubmit = event => {
    event.preventDefault();

    this.setState({ fetching: true }, () =>
      CountryService.getCountryByCode(this.state.code)
        .then(json => {
          this.setState({ fetching: false, country: json });
        })
        .catch(error => {
          console.error(error);
          this.setState({ fetching: false });
        })
    );
  };

  onTextChange = event => {
    this.setState({ code: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.code}
            onChange={this.onTextChange}
          />
          <button type="submit" disabled={this.state.fetching}>
            {this.state.fetching ? "Fetching..." : "Search"}
          </button>
        </form>
        <pre>{JSON.stringify(this.state.country)}</pre>
      </div>
    );
  }
}

export default CountryView;
