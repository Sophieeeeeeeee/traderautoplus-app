import React from 'react';
import {
    act, prettyDOM,
    render,
    screen,
} from '@testing-library/react';
import UserInputs from '../UserInputs';
import { Router, BrowserRouter } from "react-router-dom";
import {createMemoryHistory} from "history";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

describe('UsersInput', () => {
    test('Test UsersInput renders sign up', async () => {
        // Will throw an error if failed to render
        render(<BrowserRouter> <UserInputs /> </BrowserRouter>);

        expect(screen.getByText('Select vehicle type')).toBeInTheDocument();
    });

    test('Test UsersInput renders browse', async () => {
        Enzyme.configure({ adapter: new Adapter() })
        const userInputs = shallow(<BrowserRouter> <UserInputs which={false}/> </BrowserRouter>);
        userInputs.setState({ currentStep: -1});
        expect(userInputs.state('currentStep')).toEqual(-1);
    })
});

