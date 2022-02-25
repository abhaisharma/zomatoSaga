import React from "react";
import CityForm from "./Components/CityForm";
import { connect } from "react-redux";

class Home extends React.Component {
  
  render() {

    return (
      <div>
        <h1>Welcome</h1>
        <h2>Enter Your Home City</h2>
        <CityForm  />
      </div>
    );
  }
}


export default connect()(Home);
