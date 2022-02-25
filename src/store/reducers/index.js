

import { UPDATE_CUISINES, UPDATE_RESTAURANTS, CUISINES_LOADING,  RESTAURANTS_LOADING } from "../actions/types";
import produce from 'immer';


const initialState = {
  cuisineList: [],
  restaurantList: [],
  cityId: "",
  cuisine:{},
  cuisinesLoading:false,
  restaurantsLoading:false

};

export const rootReducer =  (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_CUISINES:
      return Object.assign({}, state, {
        cuisineList: action.payload.cuisines,
        cityId:action.payload.cityId,
        restaurantList: [],
        cuisinesLoading:false,
        restaurantsLoading:false,
        cuisine:null

      });

    case UPDATE_RESTAURANTS:

      return Object.assign({}, state, {
        restaurantList: action.payload.restaurantList,
        cuisine:action.payload.cuisine,
        cuisinesLoading:false,
        restaurantsLoading:false
      });

      case CUISINES_LOADING:    

       return {...state, cuisinesLoading:true, cuisineList:[], cuisine:null} ;

      case RESTAURANTS_LOADING:      
       //return {...state, restaurantsLoading:true, restaurantList:[]};
       return produce(state,(draft)=> {draft.restaurantsLoading=true; draft.restaurantList=[]; draft.restaurantsLoading=true;});
       
       
    default:
      return state;
  }
}
