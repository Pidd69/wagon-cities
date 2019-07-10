import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (props.selectedCity.length === 0) {
    return (
      <div className="active-city">
        <p> No city selected - Select a city...</p>
        <img src="https://www.eu-events.eu/images/LOGOS/LEWAGON.png" width="80%" alt="Enjoy the town" />
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}`;

  return (
    <div className="active-city">
      <h2>{props.selectedCity.name}</h2>
      <strong>{props.selectedCity.address}</strong>
      <img src={url} width="100%" alt="Enjoy the town" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
