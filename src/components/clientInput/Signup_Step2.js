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
                            Find the car and loan that best suit your needs by filling out the information below!
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

                        <button className='form-input-btn' type='submit' onClick={props.handleSubmit}>
                            <a href='http://localhost:3000/browse'>Submit and go browse cars</a>
                        </button>

                    </form>
                </div>
            </div>



        </div>)

}

export default SignupStep2