import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import CarItem from '../CarItem';
import {BrowserRouter} from "react-router-dom";

describe('CarItem', () => {
    test('Simulate selection of a car item', async () => {
        // test image appears
        const { getByAltText, getByRole } = render(<BrowserRouter><CarItem /> </BrowserRouter>);

        // Will throw an exception if the element cannot be found
        getByAltText("Car Image");
        // Will throw an exception if the element cannot be found
        getByRole('heading');

        // test car name appears
        expect(screen.getByRole('heading')).toBeInTheDocument();

        // test that clicking the car's card brings them to a new link;
        // if never called there will be a timed-out failure
        fireEvent.click(screen.getByRole('link'));
    });
});

