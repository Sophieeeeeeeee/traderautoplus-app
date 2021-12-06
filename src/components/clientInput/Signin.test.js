import { render, screen } from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Signin from "../clientInput/Signin.js";
import React from "react";
import userEvent from "@testing-library/user-event";


describe('Sign In Form', () => {
    test('Test Render', () =>{
        render(<BrowserRouter><Signin /></BrowserRouter>);
        expect(screen.getByText('Username:')).toBeInTheDocument();
        expect(screen.getByText('Password:')).toBeInTheDocument();
        expect(screen.getByText('Sign in')).toBeInTheDocument();
    })
    test('Test Fill Out Form', async () => {
        const utils = render(<BrowserRouter><Signin/></BrowserRouter>);
        const inputUsername = utils.getByPlaceholderText("Enter your username");
        const inputPassword = utils.getByPlaceholderText("Enter your password");
        userEvent.type(inputUsername, "Paul")
        userEvent.type(inputPassword, "123")
        expect(screen.getByPlaceholderText('Enter your username')).toHaveValue("Paul")
        expect(screen.getByPlaceholderText('Enter your password')).toHaveValue("123")
    });
    test('Test Submit Button', () => {
        render(<BrowserRouter><Signin /></BrowserRouter>);
        const alertMock = jest.spyOn(window,'alert').mockImplementation();
        const button = screen.getByText("Sign in")
        userEvent.click(button)
        expect(alertMock).toHaveBeenCalledTimes(1)
    });

});