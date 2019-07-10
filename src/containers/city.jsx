import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from "../actions/index";

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  };

  render() {
    let containerClasses = "list-group-item";
    if (this.props.city === this.props.selectedCity) {
      containerClasses += " selected-city";
    }
    return (
      <div className={containerClasses} onClick={this.handleClick} >
        <h3>{this.props.city.name}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
