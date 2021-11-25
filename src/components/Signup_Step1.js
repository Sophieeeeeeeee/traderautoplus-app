import React from "react";

function SignupStep1(props){

    if (props.currentStep !== 1){
        return null
    }

    return(
        <div>
            <div className='form-container'>
                <div className='form-content'>
                    <form onSubmit={props.handleSubmit} className='form'>
                        <h1>
                            Get started with us today! Create an account!
                        </h1>

                        <h1>
                            Step 1
                        </h1>

                        <div className='form-inputs'>
                            <label className='form-label'> Username:</label>
                            <input className='form-input'
                                   name = "name"
                                   type="text"
                                   placeholder='Enter your name'
                                   value={props.name}
                                   onChange={props.handleChange}/>
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'> Password:</label>
                            <input className='form-input'
                                   name = "password"
                                   type="text"
                                   placeholder='Enter a password'
                                   value={props.password}
                                   onChange={props.handleChange}/>
                        </div>

                        <button className='form-input-btn' type='button' onClick={props.handleCurrentStep}>
                            Next
                        </button>

                        {/*<button className='form-input-btn' type='submit'>*/}
                        {/*    <a href='http://localhost:3000/browse'>Submit and go browse cars</a>*/}
                        {/*</button>*/}

                    </form>

                </div>
            </div>



        </div>)

}

export default SignupStep1