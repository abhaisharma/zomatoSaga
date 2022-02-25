import React from "react";
import { connect } from "react-redux";
import {FETCH_RESTAURANTS} from "../../store/actions/types"
import "../../index.scss";
import  "../../fontawesome/css/all.css"


const Cuisine = (props) => {


    const chooseCuisine = () => {

      const { cuisine, cityId, dispatch } = props;
  
      // types we can randomize with location for restaurants/places:
      // cuisine, collection, establishment, categories

      dispatch({type:FETCH_RESTAURANTS, payload:{cuisine, cityId}}) 
  
    };
  
    const iconStyle = {float:"left", marginLeft:'10px'}
      return (
        <div onClick={chooseCuisine}>
          <i class="fas fa-utensils" style={iconStyle}  aria-hidden="true"></i>
          <h4 className="clicky-clicky">{props.cuisine.cuisine_name}</h4>
        </div>
      );

  }

export default connect()(Cuisine);
