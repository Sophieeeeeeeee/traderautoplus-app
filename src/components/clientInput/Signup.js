import React from "react";
import '../../app/App.css';
import './UserInput.css';
import SignupStep1 from "./Signup_Step1";
import SignupStep2 from "./Signup_Step2";
import SignupStep3 from "./Signup_Step3";



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

                    <SignupStep1
                        currentStep={props.currentStep}
                        handleCurrentStep = {props.handleCurrentStep2}

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
                        handleCurrentStep = {props.handleCurrentStep3}

                        name = {props.name}
                        password =  {props.password}
                        maxMonthlyPayment = {props.maxMonthlyPayment}
                        maxDownPayment = {props.maxDownPayment}
                        zipCode = {props.zipCode}
                        creditScore = {props.creditScore}
                        handleChange = {props.handleChange}
                        handleSubmit = {props.handleSubmit}
                        sendPost = {props.sendPost}/>

                    <SignupStep3
                        currentStep={props.currentStep}

                        name = {props.name}
                        password =  {props.password}
                        maxMonthlyPayment = {props.maxMonthlyPayment}
                        maxDownPayment = {props.maxDownPayment}
                        zipCode = {props.zipCode}
                        creditScore = {props.creditScore}
                        handleChange = {props.handleChange}
                        handleSubmit = {props.handleSubmit}
                        sendPost = {props.sendPost}

                        monthlyIncome = {props.monthlyIncome}
                        monthlyDebt = {props.monthlyDebt}
                        employed = {props.employed}
                        homeowner = {props.homeowner}
                        handleCarFilter = {props.handleCarFilter}/>

                </form>


            </div>
        </div>

        {/*<div className='form-container2'>*/}
        {/*    <h1> Don't know your credit score? <br />*/}
        {/*        Check this: <a href='https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/order-credit-report.html#toc2'>*/}
        {/*            Ordering your credit report and score*/}
        {/*        </a>*/}
        {/*    </h1>*/}

        {/*    <img className='img' src='images/creditinfo1.png' alt='spaceship' />*/}
        {/*    <img className='img' src='images/creditinfo2.png' alt='spaceship' />*/}

        {/*    <h1> Go to TransUnion and view your credit report! <br />*/}
        {/*        <a href='https://members.transunion.ca/tucan_en/orderStep1_form.page?offer=CANTUM10070&CID=TRANSUNION:HPB'>*/}
        {/*            Join TransUnion*/}
        {/*        </a>*/}
        {/*    </h1>*/}
        {/*    <iframe className='iframe' src="https://members.transunion.ca/tucan_en/orderStep1_form.page?offer=CANTUM10070&CID=TRANSUNION:HPB" height="200" width="300" title="Iframe Example"></iframe>*/}
        {/*    <iframe className='iframe' src= "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/order-credit-report.html#toc1" height="200" width="300" title="Iframe Example"></iframe>*/}
        {/*</div>*/}


    </div>
)
}

export default Signup