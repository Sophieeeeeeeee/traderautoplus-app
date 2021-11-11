import React from "react";
import '../App.css';
import './UserInput.css';

function Signup(props){

    return(
    <div>
        <div className='form-container'>
            <div className='form-content'>
                <form onSubmit={props.handleSubmit} className='form'>
                    <h1>
                        Get started with us today! Find the car and loan that best suit your needs by filling out information below!
                    </h1>

                    <div className='form-inputs'>
                        <label className='form-label'> Name:</label>
                        <input className='form-input'
                               name = "name"
                               type="text"
                               placeholder='Enter your name'
                               value={props.name}
                               onChange={props.handleChange}/>
                    </div>

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

                    <button className='form-input-btn' type='submit'>
                        {/*<a href='http://localhost:3000/browse'>Submit</a>*/}
                        Submit and go browse cars
                    </button>

                    {/*<button className='form-input-btn' onClick={props.sendPost}>Post</button>*/}
                    {/*<p>{this.props.postRequest}</p>*/}

                    {/*                <span className='form-input-login'>*/}
                    {/*  Already have an account? Login <a href='#'>here</a>*/}
                    {/*</span>*/}

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