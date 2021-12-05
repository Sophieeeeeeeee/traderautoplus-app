import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Cars from "./Cars";
// import CarFilter from "./CarFilter";

describe('Cars', () => {
    test('Test Cars page renders', async () => {
        render(<Cars />);
        // TODO: test CarFilter appears?
        // expect(screen.getByRole('CarList')).toBeInTheDocument();
        expect(screen.getByText('Check out these cars recommended to you!')).toBeInTheDocument();
        expect(screen.getByText('Apply filter to find the one for you!')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Filter/i})).toBeInTheDocument();
    });

    test('Test filter button', async () => {
        // Test filter button; if never called there will be a timed-out failure
        fireEvent.click(screen.getByRole('button', { name: /Filter/i}))
    });

});

