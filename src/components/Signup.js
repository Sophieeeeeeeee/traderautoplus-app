import React from "react";
import '../App.css';
import './UserInput.css';
import SignupStep1 from "./Signup_Step1";
import SignupStep2 from "./Signup_Step2";


/**
 * Renders Signup page, the form inputs, props all come from UserInputs class
 * @props  {String} name
 * @props  {String} maxDownPayment
 * @props  {String} maxMonthly Payment
 * @props  {String} zipCode
 * @props  {String} creditScore
 * @props  {function} handleSubmit display alert and saves user inputs to UserInputs state
 * @props  {function} handleChange box content updates based on what user types
 * @sendPost = {props.sendPost}
 */
function Signup(props){

    return(
    <div>
        <div className='form-container'>
            <div className='form-content'>
                <form onSubmit={props.handleSubmit} className='form'>
                {/*    <h1>*/}
                {/*        Get started with us today! Create an account and find the car and loan that best suit your needs by filling out the information below!*/}
                {/*    </h1>*/}

        {/*            <div className='form-inputs'>*/}
        {/*                <label className='form-label'> User name:</label>*/}
        {/*                <input className='form-input'*/}
        {/*                       name = "name"*/}
        {/*                       type="text"*/}
        {/*                       placeholder='Enter your name'*/}
        {/*                       value={props.name}*/}
        {/*                       onChange={props.handleChange}/>*/}
        {/*            </div>*/}

        {/*            <div className='form-inputs'>*/}
        {/*                <label className='form-label'> Password:</label>*/}
        {/*                <input className='form-input'*/}
        {/*                       name = "name"*/}
        {/*                       type="text"*/}
        {/*                       placeholder='Enter your name'*/}
        {/*                       value={props.name}*/}
        {/*                       onChange={props.handleChange}/>*/}
        {/*            </div>*/}

        {/*            <div className='form-inputs'>*/}
        {/*                <label className='form-label'>Downpayment:</label>*/}
        {/*                <input className='form-input'*/}
        {/*                       name = "maxDownPayment"*/}
        {/*                       type="text"*/}
        {/*                       placeholder='Enter your down payment'*/}
        {/*                       value={props.maxDownPayment}*/}
        {/*                       onChange={props.handleChange}/>*/}
        {/*            </div>*/}

        {/*            <div className='form-inputs'>*/}
        {/*                <label className='form-label'> Monthly Budget:</label>*/}
        {/*                <input className='form-input'*/}
        {/*                       name = "maxMonthlyPayment"*/}
        {/*                       type="text"*/}
        {/*                       placeholder='Enter your monthly payment budget'*/}
        {/*                       value={props.maxMonthlyPayment}*/}
        {/*                       onChange={props.handleChange}/>*/}
        {/*            </div>*/}

        {/*            <div className='form-inputs'>*/}
        {/*                <label className='form-label'>Zip Code:</label>*/}
        {/*                <input className='form-input'*/}
        {/*                       name = "zipCode"*/}
        {/*                       type="text"*/}
        {/*                       placeholder='Enter your zip code'*/}
        {/*                       value={props.zipCode}*/}
        {/*                       onChange={props.handleChange}/>*/}
        {/*            </div>*/}


        {/*            <div className='form-inputs'>*/}
        {/*                <label className='form-label'>Credit Score: </label>*/}
        {/*                <input className='form-input'*/}
        {/*                       name = "creditScore"*/}
        {/*                       type="text"*/}
        {/*                       placeholder='Enter your credit score'*/}
        {/*                       value={props.creditScore}*/}
        {/*                       onChange={props.handleChange}/>*/}
        {/*            </div>*/}

        {/*            <button className='form-input-btn' type='submit'>*/}
        {/*                /!*<a href='http://localhost:3000/browse'>Submit</a>*!/*/}
        {/*                Submit and go browse cars*/}
        {/*            </button>*/}

        {/*            /!*<button className='form-input-btn' onClick={props.sendPost}>Post</button>*!/*/}
        {/*            /!*<p>{this.props.postRequest}</p>*!/*/}

        {/*            /!*                <span className='form-input-login'>*!/*/}
        {/*            /!*  Already have an account? Login <a href='#'>here</a>*!/*/}
        {/*            /!*</span>*!/*/}

                    <SignupStep1
                        currentStep={props.currentStep}
                        handleCurrentStep = {props.handleCurrentStep}

                        name = {props.name}
                        password =  {props.password}
                        maxMonthlyPayment = {props.maxMonthlyPayment}
                        maxDownPayment = {props.maxDownPayment}
                        zipCode = {props.zipCode}
                        creditScore = {props.creditScore}
                        handleChange = {props.handleChange}
                        handleSubmit = {props.handleSubmit}
                        sendPost = {props.sendPost}/>

                    <SignupStep2
                        currentStep={props.currentStep}

                        name = {props.name}
                        password =  {props.password}
                        maxMonthlyPayment = {props.maxMonthlyPayment}
                        maxDownPayment = {props.maxDownPayment}
                        zipCode = {props.zipCode}
                        creditScore = {props.creditScore}
                        handleChange = {props.handleChange}
                        handleSubmit = {props.handleSubmit}
                        sendPost = {props.sendPost}/>

                </form>


            </div>
        </div>

        <div className='form-container2'>
            <h1> Don't know your credit score? <br />
                Check this: <a href='https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/order-credit-report.html#toc2'>
                    Ordering your credit report and score
                </a>
            </h1>

            <img className='img' src='images/creditinfo1.png' alt='spaceship' />
            <img className='img' src='images/creditinfo2.png' alt='spaceship' />

            <h1> Go to TransUnion and view your credit report! <br />
                <a href='https://members.transunion.ca/tucan_en/orderStep1_form.page?offer=CANTUM10070&CID=TRANSUNION:HPB'>
                    Join TransUnion
                </a>
            </h1>
            <iframe className='iframe' src="https://members.transunion.ca/tucan_en/orderStep1_form.page?offer=CANTUM10070&CID=TRANSUNION:HPB" height="200" width="300" title="Iframe Example"></iframe>
            <iframe className='iframe' src= "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/order-credit-report.html#toc1" height="200" width="300" title="Iframe Example"></iframe>
        </div>


    </div>
)
}

export default Signup