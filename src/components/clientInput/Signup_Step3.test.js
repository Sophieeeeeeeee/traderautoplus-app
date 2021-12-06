import { render, screen } from "@testing-library/react";
import SignupStep3 from './Signup_Step3';
import React from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

// set up test prop
const testProps = {
    currentStep: 3
}

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

describe('Sign Up Form - Step 3', () => {
    test('Test Render', () =>{
        act(() => {
            render(<SignupStep3 {...testProps}/>, container);
        });
        expect(screen.getByText("Would you like to be an advanced user?")).toBeInTheDocument();
        expect(screen.getByText("Monthly Income:")).toBeInTheDocument();
        expect(screen.getByText("Monthly Debt:")).toBeInTheDocument();
        expect(screen.getByText("Are you currently employed?")).toBeInTheDocument();
        expect(screen.getByText("Are you a homeowner?")).toBeInTheDocument();
        expect(screen.getByText("Submit")).toBeInTheDocument();

    })
    test('Test Fill Out Form', async () => {
        await act(() => {
            render(<SignupStep3 {...testProps}/>, container);
        });

        const inputAdvance = screen.getByText("Interested in becoming advanced user?");
        const inputIncome = screen.getByPlaceholderText("Enter your monthly income");
        const inputBudget = screen.getByPlaceholderText("Enter your monthly debt");
        userEvent.type(inputAdvance, "Yes!")
        userEvent.type(inputIncome, "500")
        userEvent.type(inputBudget, "500")
        expect(screen.getByPlaceholderText('Enter your monthly income')).toHaveValue(500)
        expect(screen.getByPlaceholderText('Enter your monthly debt')).toHaveValue(500)
        expect(screen.getByText("Interested in becoming advanced user?")).toHaveValue("Yes!")
    });
});