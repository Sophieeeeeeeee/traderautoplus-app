import React from "react";

function SignupStep2(props){

    if (props.currentStep !== 2){
        return null
    }
    return(
        <div>
            <div className='form-container'>
                <div className='form-content'>
                    <form onSubmit={props.handleSubmit} className='form'>
                        <h1>
                            Find the car and loan that best suits your needs by filling out the information below!
                        </h1>

                        <h1>
                            Step 2
                        </h1>

                        <div className='form-inputs'>
                            <label className='form-label'>Downpayment:</label>
                            <input className='form-input'
                                   name = "maxDownPayment"
                                   type="text"
                                   placeholder='Enter your down payment'
                                   value={props.maxDownPayment}
                                   onChange={props.handleChange}/>
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'> Monthly Budget:</label>
                            <input className='form-input'
                                   name = "maxMonthlyPayment"
                                   type="text"
                                   placeholder='Enter your monthly payment budget'
                                   value={props.maxMonthlyPayment}
                                   onChange={props.handleChange}/>
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Zip Code:</label>
                            <input className='form-input'
                                   name = "zipCode"
                                   type="text"
                                   placeholder='Enter your zip code'
                                   value={props.zipCode}
                                   onChange={props.handleChange}/>
                        </div>


                        <div className='form-inputs'>
                            <label className='form-label'>Credit Score: </label>
                            <input className='form-input'
                                   name = "creditScore"
                                   type="text"
                                   placeholder='Enter your credit score'
                                   value={props.creditScore}
                                   onChange={props.handleChange}/>
                        </div>

                        <button className='form-input-btn' type='button' onClick={props.stepTwoNext}>
                            Next
                        </button>

                        {/*<button className='form-input-btn' type='submit' onClick={props.handleSubmit}>*/}
                        {/*    <a href='http://localhost:3000/browse'>Submit and go browse cars</a>*/}
                        {/*</button>*/}

                    </form>
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



        </div>)

}

export default SignupStep2