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
 * @sendPost = {props.sendPost}
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

        <div>
            {/*dropdown selects*/}
            {/*<Select*/}
            {/*    name='carColor'*/}
            {/*    value={props.carColor}*/}
            {/*    onChange={props.handleCarFilter}*/}
            {/*    options={colorOptions}*/}
            {/*    placeholder='Select vehicle color'*/}
            {/*/>*/}
            <Select
                name='carType'
                value={props.carColor}
                onChange={props.handleCarFilter}
                options={typeOptions}
                placeholder='Select vehicle type'
            />

            {/*<Select*/}
            {/*    name='carBrand'*/}
            {/*    value={props.carBrand}*/}
            {/*    onChange={props.handleCarFilter}*/}
            {/*    options={brandOptions}*/}
            {/*    placeholder='Select vehicle brand(s)'*/}
            {/*    isMulti={true}*/}
            {/*    isSearchable={true}*/}
            {/*/>*/}

            {/*<Select*/}
            {/*    name='carAge'*/}
            {/*    value={props.carAge}*/}
            {/*    onChange={props.handleCarFilter}*/}
            {/*    options={ageOptions}*/}
            {/*    placeholder='Select vehicle age'*/}
            {/*    isMulti={true}*/}
            {/*/>*/}
            {/*<button className='filter-btn' onClick={props.sendIDRequest}>SendID</button>*/}

        </div>

    )

};

export default CarFilter

// const CarFilter = () => {
//
//     // const [color, setColor] = useState('Black');
//     // const [type, setType] = useState('SUV');
//
//     // const [values, setValues] = useState({
//     //     color: null,
//     //     type: null,
//     //     brand:null,
//     //     age: null
//     // })
//
//     const [values, setValues] = returnInfo(true)
//
//     const handleChange = selected =>{
//         setValues(
//             {[selected.name]:selected.value});
//     };
//
//     const colorOptions= [
//         {value:'Black', label:'Black'},
//         {value:'Silver', label:'Silver'},
//         {value:'Red', label:'Red'},
//         {value:'Blue', label:'Blue'}
//     ];
//
//     const typeOptions= [
//         {value:'SUV', label:'SUV'},
//         {value:'Sedan', label:'Sedan'},
//         {value:'Coupe', label:'Coupe'},
//         {value:'Minivan', label:'Minivan'},
//         {value:'Sports', label:'Sports'}
//     ];
//
//     const brandOptions= [
//         {value:'BMW', label:'BMW'},
//         {value:'Mercedes', label:'Mercedes'},
//         {value:'Honda', label:'Honda'},
//         {value:'Toyota', label:'Toyota'},
//         {value:'Mazda', label:'Mazda'}
//     ];
//
//     const ageOptions= [
//         {value:'1-3', label:'1-3'},
//         {value:'3-5', label:'3-5'},
//         {value:'5-7', label:'5-7'},
//         {value:'7-10', label:'7-10'}
//     ];
//
//     // const sendPost = () => {
//     //     //const {name, creditScore, zipCode, carPreferences, maxDownPayment, maxMonthlyPayment} = this.state
//     //     // const user = this.state
//     //     const post = {"car-preference": user.carPreferences, "zip-code": user.zipCode,
//     //         "downpayment": user.maxDownPayment, "name": user.name, "credit-score": user.creditScore, "monthlybudget": user.maxMonthlyPayment};
//     //     // {"car-preference": "SUV", "zip-code": "M51 1S6", "downpayment": "200", "name": "Paul", "credit-score":"770" , "monthlybudget": "5000"}
//     //     console.log(post)
//     //     console.log(JSON.stringify(post))
//     //
//     //     const requestOptions = {
//     //         method: "POST",
//     //         headers: { "Content-Type": "application/json" },
//     //         body: JSON.stringify(post)
//     //     };
//     //     var postRequest = "";
//     //     fetch("http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/traderauto-plus", requestOptions)
//     //         .then(response => response.json())
//     //         .then(res => console.log(res))
//     //         .then(res => this.setState({postRequest: res}))
//     // };
//
//     return(
//         <div>
//             <Select
//                 name='color'
//                 value={values.color}
//                 onChange={handleChange}
//                 options={colorOptions}
//                 placeholder='Select vehicle color'
//             />
//             <Select
//                 name='type'
//                 value={values.type}
//                 onChange={handleChange}
//                 options={typeOptions}
//                 placeholder='Select vehicle type'
//             />
//
//             <Select
//                 name='brand'
//                 value={values.brand}
//                 onChange={handleChange}
//                 options={brandOptions}
//                 placeholder='Select vehicle brand(s)'
//                 isMulti={true}
//                 isSearchable={true}
//             />
//
//             <Select
//                 name='age'
//                 value={values.age}
//                 onChange={handleChange}
//                 options={ageOptions}
//                 placeholder='Select vehicle age'
//                 isMulti={true}
//             />
//
//             <button>Filter</button>
//
//         </div>
//
//     )
//
// };
//
// export default CarFilter