import {fireEvent, getByText, render, screen, waitFor, waitForElement} from "@testing-library/react";
import SignUpStep3 from '../SignUpStep3';
import React from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from "react-router-dom";
import SignIn from "../SignIn";

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
            render(<SignUpStep3 {...testProps}/>, container);
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
            render(<SignUpStep3 {...testProps}/>, container);
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
        const { getByText } = render(<SignUpStep3 {...testProps}
                                                  options={mockedOptions}
                                                  onChange={mockedOnChange} />);

        const placeholder = getByText('Would you like to be an advanced user?');

        expect(placeholder).toBeTruthy();
    });
    test('Test Select Option from List', async() => {
        const mockedOnChange = jest.fn();
        const { getByText, queryByTestId } = render(<SignUpStep3 {...testProps}
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
        const handleSubmit = jest.fn();
        const handleChange = jest.fn();
        const handleInputChange = jest.fn();
        const onClick = jest.fn();

        const thisProps = {
            currentStep: 3,
            advanced: true,
            monthlyIncome: 8000,
            monthlyDebt: 200,
            handleSubmit,
            handleChange,
            handleInputChange,
            onClick,
        }


        render(<SignUpStep3 {...thisProps}/>);
        const button = screen.getByRole("button");
        userEvent.click(button);
        expect(thisProps.handleSubmit).toHaveBeenCalled();
    });
});