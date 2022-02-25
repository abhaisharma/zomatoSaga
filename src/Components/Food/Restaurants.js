import React from "react";

import Restaurant from "./Restaurant";
import { connect } from "react-redux";

const  Restaurants =  (props) =>
  {
   
    
    const header = (props.restaurantsLoading ? "Loading... " : (props.cuisine && props.cuisine.cuisine_name ? props.cuisine.cuisine_name :  "No Cuisine Selected"));

    return (
      <div>
        {props.restaurantList.length === 0 ? (
          <h1>{header}</h1>
        ) : (
          <div>
            <h1>{header}</h1>
            {props.restaurantList.map(restaurantObj => {
              return (
                <Restaurant
                  restaurant = {restaurantObj.restaurant}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }

  const mapStateToProps = state => ({
    restaurantList: state.restaurantList,
    cuisine:state.cuisine,
    restaurantsLoading:state.restaurantsLoading
  });
  
  
export default connect(
   mapStateToProps
  )(Restaurants);
  
