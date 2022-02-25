import { UPDATE_CUISINES, UPDATE_RESTAURANTS } from "../actions/types";

export const updateCuisines = (cityId, cuisines) => ({
  type: UPDATE_CUISINES,
  payload: {cityId, cuisines}
});

export const updateRestaurants = (cuisine, restaurantList) => ({
  type: UPDATE_RESTAURANTS,
  payload: {cuisine, restaurantList}
});
