import { render, screen } from "@testing-library/react";
import SignUpStep1 from '../SignUpStep1';
import React from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

// set up test prop
const testProps = {
    currentStep: 1
}

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

describe('Sign Up Form - Step 1', () => {
    test('Test Render', () =>{
        act(() => {
            render(<SignUpStep1 {...testProps}/>, container);
        });
        expect(screen.getByText("Step 1")).toBeInTheDocument();
        expect(screen.getByText("Username:")).toBeInTheDocument();
        expect(screen.getByText("Password:")).toBeInTheDocument();
        expect(screen.getByText("Next")).toBeInTheDocument();

    })
    test('Test Fill Out Form', async () => {
        await act(() => {
            render(<SignUpStep1 {...testProps}/>, container);
        });

        const inputUsername = screen.getByPlaceholderText("Enter your name");
        const inputPassword = screen.getByPlaceholderText("Enter a password");
        userEvent.type(inputUsername, "Paul")
        userEvent.type(inputPassword, "123")
        expect(screen.getByPlaceholderText('Enter your name')).toHaveValue("Paul")
        expect(screen.getByPlaceholderText('Enter a password')).toHaveValue("123")
    });
});