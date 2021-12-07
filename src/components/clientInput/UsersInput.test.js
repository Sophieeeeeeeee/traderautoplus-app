import React from 'react';
import {
    render,
    screen,
    fireEvent,
    queryByTestId,
    getByText, waitFor, getByDisplayValue, act,
} from '@testing-library/react';
import UserInputs from './UserInputs';
import {BrowserRouter} from "react-router-dom";
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

const testProps = {
    which: false,
    currentStep: -1
}

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
})


describe('UsersInput', () => {
    test('Test UsersInput renders sign up', async () => {
        // Will throw an error if failed to render
        render(<BrowserRouter> <UserInputs /> </BrowserRouter>);

        expect(screen.getByText('Select vehicle type')).toBeInTheDocument();
    });

    test('Test UsersInput renders browse', async () => {
        // render(<BrowserRouter> <UserInputs {...testProps}/> </BrowserRouter>);

        render(<BrowserRouter> <UserInputs which={false}/> </BrowserRouter>);

        expect(screen.getByText('Please sign in / sign up first!')).toBeInTheDocument();
    })
});

