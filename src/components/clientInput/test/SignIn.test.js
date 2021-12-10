import { render, screen } from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import SignIn from "../SignIn.js";
import React from "react";
import userEvent from "@testing-library/user-event";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Sign In Form', () => {
    test('Test Render', () =>{
        render(<BrowserRouter><SignIn /></BrowserRouter>);
        expect(screen.getByText('Username:')).toBeInTheDocument();
        expect(screen.getByText('Password:')).toBeInTheDocument();
        expect(screen.getByText('Sign in')).toBeInTheDocument();
    })
    test('Test Fill Out Form', async () => {
        const utils = render(<BrowserRouter><SignIn/></BrowserRouter>);
        const inputUsername = utils.getByPlaceholderText("Enter your username");
        const inputPassword = utils.getByPlaceholderText("Enter your password");
        userEvent.type(inputUsername, "Paul")
        userEvent.type(inputPassword, "123")
        expect(screen.getByPlaceholderText('Enter your username')).toHaveValue("Paul")
        expect(screen.getByPlaceholderText('Enter your password')).toHaveValue("123")
    });
    test('Test Submit Button', () => {
        render(<BrowserRouter><SignIn /></BrowserRouter>);
        const alertMock = jest.spyOn(window,'alert').mockImplementation();
        const button = screen.getByText("Sign in")
        userEvent.click(button)
        expect(alertMock).toHaveBeenCalledTimes(1)
    });
});