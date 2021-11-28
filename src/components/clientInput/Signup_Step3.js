import React from "react";

function SignupStep3(props){

    if (props.currentStep !== 3){
        return null
    }
    return(
        <div>
            <div className='form-container'>
                <div className='form-content'>
                    <form onSubmit={props.handleSubmit} className='form'>
                        <h1>
                            Now select your car preference so we can show you the suitable cars!
                        </h1>

                        <h1>
                            Step 3
                        </h1>

                        <div className='form-inputs'>
                            <label className='form-label'>Car Preference:</label>
                            <input className='form-input'
                                   name = "carPreference"
                                   type="text"
                                   placeholder='Enter your down payment'
                                   value={props.maxDownPayment}
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