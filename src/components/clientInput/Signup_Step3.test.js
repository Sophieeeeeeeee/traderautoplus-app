import {fireEvent, getByText, render, screen, waitFor, waitForElement} from "@testing-library/react";
import SignupStep3 from './Signup_Step3';
import React from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from "react-router-dom";
import Signin from "./Signin";

Enzyme.configure({ adapter: new Adapter() });

// set up test prop
const testProps = {
    currentStep: 3,
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

        const inputIncome = screen.getByPlaceholderText("Enter your monthly income");
        const inputBudget = screen.getByPlaceholderText("Enter your monthly debt");
        userEvent.type(inputIncome, "500")
        userEvent.type(inputBudget, "500")
        expect(screen.getByPlaceholderText('Enter your monthly income')).toHaveValue(500)
        expect(screen.getByPlaceholderText('Enter your monthly debt')).toHaveValue(500)
    });
    const mockedOptions = [
        { value: "true", label: "Yes!" },
        { value: "false", label: "No, thank you" },
    ];
    test('Test Render List', async() => {
        const mockedOnChange = jest.fn();
        const { getByText } = render(<SignupStep3 {...testProps}
            options={mockedOptions}
            onChange={mockedOnChange} />);

        const placeholder = getByText('Would you like to be an advanced user?');

        expect(placeholder).toBeTruthy();
    });
    test('Test Select Option from List', async() => {
        const mockedOnChange = jest.fn();
        const { getByText, queryByTestId } = render(<SignupStep3 {...testProps}
            options={mockedOptions}
            onChange={mockedOnChange} />);

        const mySelectComponent = queryByTestId('select-component');

        expect(mySelectComponent).toBeDefined();
        expect(mySelectComponent).not.toBeNull();
        expect(mockedOnChange).toHaveBeenCalledTimes(0);

        fireEvent.keyDown(mySelectComponent.firstChild, { key: 'ArrowDown' });
        await waitForElement(() => getByText('Yes!'));
        fireEvent.click(getByText('Yes!'));

        expect(screen.queryByText('Interested in becoming advanced user?')).not.toBeInTheDocument()
        expect(screen.getByText('Yes!')).toBeVisible();
    });

    test('Test Submit Button', async () => {
        render(<SignupStep3 {...testProps}/>);
        const alertMock = jest.spyOn(window,'alert').mockImplementation();
        const button = screen.getByRole("button");
        userEvent.click(button);
        expect(alertMock).toHaveBeenCalledTimes(1);

    });
});