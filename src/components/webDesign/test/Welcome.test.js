import React from 'react';
import {fireEvent, getByRole, render, screen} from '@testing-library/react';
import Welcome from '../Welcome/Welcome';
import {BrowserRouter} from "react-router-dom";

describe('Welcome', () => {
    test('Test Welcome Page Renders', () => {
        render(<BrowserRouter> <Welcome /> </BrowserRouter>);
        expect(screen.getByText('Find your most suitable car, and loan.')).toBeInTheDocument();
        expect(screen.getByText('Get Started Here')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Get Started/i})).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Sign In/i})).toBeInTheDocument();
    });
    test('Test Buttons', async () => {
        render(<BrowserRouter> <Welcome/> </BrowserRouter>);

        // Test click buttons; if never called there will be a timed-out failure
        fireEvent.click(screen.getByRole('button', { name: /Get Started/i}))
        fireEvent.click(screen.getByRole('button', { name: /Sign In/i}))

    })
});