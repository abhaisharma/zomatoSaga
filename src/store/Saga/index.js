
import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import { updateCuisines, updateRestaurants } from "../../store/actions";
import { FETCH_CUISINES, FETCH_RESTAURANTS, CUISINES_LOADING,RESTAURANTS_LOADING} from "../actions/types";
import { access } from "fs";

const key = "24ee0a9e06881fa4e0e44eca87f014d0 ";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* rootSaga() {

  yield all([
    takeLatest(FETCH_CUISINES, fetchCuisineSaga),
    takeLatest(FETCH_RESTAURANTS, fetchRestaurantsSaga),
     ]);
  
 }
 

// worker saga: makes the api call when watcher saga sees the action
function* fetchCuisineSaga(action) {
  try {

    const cityId  = action.payload.cityId;
    yield put({type:CUISINES_LOADING});
    const response = yield call(fetchCuisines,cityId);
    const cuisines = response.data.cuisines;
    
    // dispatch a success action to the store with the new dog
    yield put(updateCuisines( cityId, cuisines ));
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    console.log("Error:"+error);
    yield put({ type: "CUISINE_LOAD_FAILURE", error });
  }
}

const fetchCuisines = (cityId) => {

  // types we can randomize with location for restaurants/places:
  // cuisine, collection, establishment, categories
  // cuisine url

  const url = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${cityId}`;

 return   axios({method:"get", url, headers:{"user-key": key}});
}


// worker saga: makes the api call when watcher saga sees the action
function* fetchRestaurantsSaga(action) {
  try {
     
    const { cityId , cuisine } = action.payload;
    
    yield put({type:RESTAURANTS_LOADING});
    const response = yield call(fetchRestaurants,cityId, cuisine);
    const restaurantList = response.data.restaurants;

    // dispatch a success action to the store with the new dog
    yield put(updateRestaurants(cuisine,restaurantList));
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    console.log("Error:"+error);
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

const fetchRestaurants = (cityId, cuisine) => {

  // types we can randomize with location for restaurants/places:
  // cuisine, collection, establishment, categories

  // cuisine url
  const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisine.cuisine_id}`;

 return   axios({method:"get", url, headers:{"user-key": key}});
}

