import React from 'react';
import './App.css';
import './Components/CityForm'
import Home from './Home';
import {connect} from 'react-redux'
import Cuisines from './Components/Food/Cuisines'

function App() {
  return (

    <div className="App">
    <Home></Home>
    <Cuisines></Cuisines>
    </div>
  );
}


const mapStateToProps = state => ({
  cuisineList: state.cuisineList,
  restaurantList: state.restaurantList
});

export default connect(
  mapStateToProps,
  {}
)(App);
//



