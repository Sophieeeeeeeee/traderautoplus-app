import React, {useState} from 'react';
import Select from "react-select";
import './Cars.css';

/**
 * Renders Dropdown car filter on browse page
 * @props  {String} carColor dropdown option (single)
 * @props  {String} carType dropdown option (single)
 * @props  {String array} carBrand dropdown option (multiple)
 * @props  {String array} carAge dropdown option (multiple)
 * @props  {function} handleCarFilter dropDown (select)'s onChange action, updates boxes and saves inputs to UserInputs state
 * @props  {function} sendPost submit button's onClick action, sends post request to backend to receive response
 */
function CarFilter(props){

    // Below const are all dropdown options, label = displayed, value = what's saved if clicked on label

    const colorOptions= [
        {value:'Black', label:'Black'},
        {value:'Silver', label:'Silver'},
        {value:'Red', label:'Red'},
        {value:'Blue', label:'Blue'}
    ];

    const typeOptions= [
        {value:'SUV', label:'SUV'},
        {value:'Sedan', label:'Sedan'},
        {value:'Coupe', label:'Coupe'},
        {value:'Minivan', label:'Minivan'},
        {value:'Sports', label:'Sports'}
    ];

    const brandOptions= [
        {value:'BMW', label:'BMW'},
        {value:'Mercedes', label:'Mercedes'},
        {value:'Honda', label:'Honda'},
        {value:'Toyota', label:'Toyota'},
        {value:'Mazda', label:'Mazda'}
    ];

    const ageOptions= [
        {value:'1-3', label:'1-3'},
        {value:'3-5', label:'3-5'},
        {value:'5-7', label:'5-7'},
        {value:'7-10', label:'7-10'}
    ];


    return(
        
        <div data-testid={"select"}>
            <Select
                name='carType'
                value={props.carType}
                onChange={props.handleCarFilter}
                options={typeOptions}
                placeholder='Select vehicle type'
            />
        </div>
    )

}

export default CarFilter
