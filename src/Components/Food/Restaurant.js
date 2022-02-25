import React from "react";

const Restaurant = ({restaurant}) => (

    <div class="Restaurant">
    
       <div class="RestaurantImage"><img src={restaurant.thumb} alt='Restaurant Image' height='185' width='185' /> </div>
       <div class="RestaurantInfo">
            <h2 >{restaurant.name}</h2>
            <p>{restaurant.location.address}</p>
            <p>{restaurant.location.city} {restaurant.location.zipcode && restaurant.location.zipcode.length > 1 ? " - " + restaurant.location.zipcode : "" }</p>
         </div>

      </div>);
    


export default Restaurant;
