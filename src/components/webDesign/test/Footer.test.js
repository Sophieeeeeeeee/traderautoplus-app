import React from 'react';
import {fireEvent, getByRole, render, screen} from '@testing-library/react';
import Footer from '../Footer/Footer';
import {BrowserRouter} from "react-router-dom";

describe('Footer', () => {
    test('Test Footer Renders', () => {
        render(<BrowserRouter><Footer /></BrowserRouter>);
        expect(screen.getByText('TRADERAUTO+')).toBeInTheDocument();
    });
    test('Test Footer Links', async () => {
        render(<BrowserRouter><Footer /></BrowserRouter>);
        // Test click buttons; if never called there will be a timed-out failure
        fireEvent.click(screen.getByAltText('GitHub Logo'))
        fireEvent.click(screen.getByRole('link', { name: /Sign Up/i}))
        fireEvent.click(screen.getByRole('link', { name: /Sign In/i}))
        fireEvent.click(screen.getByRole('link', { name: /Browse Cars/i}))

        // Test the buttons bring to the correct link
        expect(screen.getByAltText('GitHub Logo').parentNode).toHaveAttribute('href', 'https://github.com/autotrader-plus');
        expect(screen.getByRole('link', { name: /Sign up/i})).toHaveAttribute('href', '/sign-up');
        expect(screen.getByRole('link', { name: /Sign In/i})).toHaveAttribute('href', '/sign-in');
        expect(screen.getByRole('link', { name: /Browse Cars/i})).toHaveAttribute('href', '/browse');
    })
});