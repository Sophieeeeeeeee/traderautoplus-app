import { render, screen } from "@testing-library/react";
import SignUpStep2 from '../SignUpStep2';
import React from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

// set up test prop
const testProps = {
    currentStep: 2
}

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

describe('Sign Up Form - Step 2', () => {
    test('Test Render', () =>{
        act(() => {
            render(<SignUpStep2 {...testProps}/>, container);
        });
        expect(screen.getByText("Step 2")).toBeInTheDocument();
        expect(screen.getByText("Downpayment:")).toBeInTheDocument();
        expect(screen.getByText("Monthly Budget:")).toBeInTheDocument();
        expect(screen.getByText("Zip Code:")).toBeInTheDocument();
        expect(screen.getByText("Credit Score:")).toBeInTheDocument();
        expect(screen.getByText("Next")).toBeInTheDocument();

    })
    test('Test Fill Out Form', async () => {
        await act(() => {
            render(<SignUpStep2 {...testProps}/>, container);
        });

        const inputDownpayment = screen.getByPlaceholderText("Enter your down payment");
        const inputBudget = screen.getByPlaceholderText("Enter your monthly payment budget");
        const inputZipcode = screen.getByPlaceholderText("Enter your zip code");
        const inputCreditScore = screen.getByPlaceholderText("Enter your credit score");
        userEvent.type(inputDownpayment, "500")
        userEvent.type(inputBudget, "500")
        userEvent.type(inputZipcode, "ZIP COD")
        userEvent.type(inputCreditScore, "700")
        expect(screen.getByPlaceholderText('Enter your down payment')).toHaveValue(500)
        expect(screen.getByPlaceholderText('Enter your monthly payment budget')).toHaveValue(500)
        expect(screen.getByPlaceholderText('Enter your zip code')).toHaveValue("ZIP COD")
        expect(screen.getByPlaceholderText('Enter your credit score')).toHaveValue(700)
    });
});