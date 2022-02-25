
import {connect} from "react-redux"
import {FETCH_CUISINES} from '../store/actions/types'
import '../index.scss';
import "../fontawesome/css/all.min.css";
import React, { useState } from 'react';


const CityForm = ({dispatch})=> {

  const [selectedCity, setCity] = useState("");

  const handleChange = e =>  setCity( e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type:FETCH_CUISINES, payload:{cityId:selectedCity }})
  };

    const iconStyle = { margin:'5px'}        
    return (
      <div class='cityForm'>
        <form onSubmit={handleSubmit}>
          <i class="fa fa-home" style={iconStyle}  aria-hidden="true"></i>
          <select
            name="selectedCity"
            value={selectedCity}
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="3">Mumbai</option>
            <option value="1">New Delhi</option>
            <option value="5">Pune</option>
          </select>
          <button>Search</button>
        </form>
      </div>
    );
  
}


export default connect()(CityForm);
