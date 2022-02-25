
import React from "react";
import { connect } from "react-redux";
import Cuisine from "./Cuisine";
import CuisineInfo from "./Restaurants";
import '../../index.scss';
import Restaurants from "./Restaurants";

const Cuisines = (props)=>
{  
     const header = (props.cuisinesLoading ? "Loading... " : "No City Selected");
     return (
      <div>
        {props.cuisineList.length === 0 || props.cuisinesLoading ? ( <h1>{header}</h1> 
        ) : (

        <section class="container">

          <div  class="one"> 
                {props.cuisineList.map(cuisineObj => {
                return (
                  <Cuisine
                    {...props}
                    key={cuisineObj.cuisine.cuisine_id}
                    cuisine = {cuisineObj.cuisine}
                  />
                );
              })}

          </div>
          
          <div class="two"> <Restaurants></Restaurants> </div>

        </section>

        )}
      </div>);
}
    ;


const mapStateToProps = state => ({
  cuisineList: state.cuisineList,
  restaurantList : state.restaurantList,
  cityId: state.cityId,
  cuisinesLoading : state.cuisinesLoading
});

export default connect(mapStateToProps)(Cuisines);
