import React from "react";
import Select from "react-select";

function SignupStep3(props) {

    if (props.currentStep !== 3) {
        return null
    }

    const employedOptions = [
        {value: 'employed', label: 'yes'},
        {value: 'not employed', label: 'no'},
    ];

    const homeownerOptions = [
        {value: 'homeowner', label: 'yes, I own a home'},
        {value: 'not homeowner', label: 'no, I do not'},
    ];

    const advancedOptions = [
        {value: true, label: 'yes!'},
        {value: false, label: 'no, thank you.'},
    ];

    return(
            <div>
                <div className='form-container'>
                    <div className='form-content'>
                        <form onSubmit={props.handleSubmit} className='form'>

                            <h1>
                                Below are <b>optional</b> inputs if you'd like to be an advanced user and get more tailored recommendations of cars and loans!
                            </h1>

                            <h1>
                                Step 3
                            </h1>

                            <div className='form-inputs'>
                                <label className='form-label'>Would you like to be an advanced user?</label>
                                <Select
                                    name='advanced'
                                    value={props.advanced}
                                    onChange={props.handleCarFilter}
                                    options={advancedOptions}
                                    placeholder='Interested in becoming advanced user?'
                                    isMulti={false}/>
                            </div>


                            <div className='form-inputs'>
                                <label className='form-label'>Monthly Income:</label>
                                <input className='form-input'
                                       name = "monthlyIncome"
                                       type="text"
                                       placeholder='Enter your monthly income'
                                       value={props.monthlyIncome}
                                       onChange={props.handleChange}/>
                            </div>

                            <div className='form-inputs'>
                                <label className='form-label'>Monthly Debt:</label>
                                <input className='form-input'
                                       name = "monthlyDebt"
                                       type="text"
                                       placeholder='Enter your monthly debt'
                                       value={props.monthlyDebt}
                                       onChange={props.handleChange}/>
                                </div>

                            {/*<div className='form-inputs'>*/}
                            {/*    <label className='form-label'>Are you currently employed?</label>*/}
                            {/*    <Select*/}
                            {/*        name='employed'*/}
                            {/*        value={props.employed}*/}
                            {/*        onChange={props.handleCarFilter}*/}
                            {/*        options={employedOptions}*/}
                            {/*        placeholder='Yes/No'*/}
                            {/*        isMulti={false}/>*/}
                            {/*</div>*/}

                            <div className='form-inputs'>
                                <label className='form-label'>Are you currently employed?</label>
                                <Select
                                    name='employed'
                                    value={props.employed}
                                    onChange={props.handleCarFilter}
                                    options={employedOptions}
                                    placeholder='Yes/No'
                                    isMulti={false}/>
                            </div>


                            <div className='form-inputs'>
                                <label className='form-label'>Are you a homeowner?</label>
                                <Select
                                    name='homeowner'
                                    onChange={props.handleCarFilter}
                                    value={props.homeowner}
                                    options={homeownerOptions}
                                    placeholder='Yes/No'
                                    isMulti={false}/>
                            </div>

                            <button className='form-input-btn' type='submit' onClick={props.handleSubmit}>
                                <a href='http://localhost:3000/browse'>Submit and go browse cars</a>
                            </button>


                        </form>

                    </div>

                </div>

            </div>
    )
}


export default SignupStep3