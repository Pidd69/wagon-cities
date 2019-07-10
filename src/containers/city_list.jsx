import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import City from "../containers/city";

import { setCities } from "../actions";

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities col-sm-7">
        {this.props.cities.map((city, index) => {
          return <City key={city.name} city={city} index={index} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

// export default CityList;
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
