import React from 'react';
import {fireEvent, getByRole, render, screen} from '@testing-library/react';
import Navbar from '../NavBar/Navbar';
import {BrowserRouter} from "react-router-dom";

describe('Navbar', () => {
    test('Test Navbar Renders', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        expect(screen.getByText('TraderAuto+')).toBeInTheDocument();
    });
    test('Test Navbar Buttons', async () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        // Test click buttons; if never called there will be a timed-out failure
        fireEvent.click(screen.getByRole('link', { name: /Sign up/i}))
        fireEvent.click(screen.getByRole('link', { name: /Sign In/i}))
        fireEvent.click(screen.getByRole('link', { name: /Browse Cars/i}))

        // Test the buttons bring to the correct link
        expect(screen.getByRole('link', { name: /Sign up/i})).toHaveAttribute('href', '/sign-up');
        expect(screen.getByRole('link', { name: /Sign In/i})).toHaveAttribute('href', '/sign-in');
        expect(screen.getByRole('link', { name: /Browse Cars/i})).toHaveAttribute('href', '/browse');
    })
});