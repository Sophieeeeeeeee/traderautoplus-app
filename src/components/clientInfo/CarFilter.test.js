import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CarFilter from './CarFilter';
import {act} from "react-dom/test-utils";

describe('CarFilter', () => {
    test('Simulate selection of car filter', async () => {
        // first clicking on dropdown
        const carDropdown = await screen.getByRole('combobox', {name: 'carType'});

        act(() => {
            fireEvent.click(carDropdown);
        });

        // selecting SUV option
        const optionOne = await screen.getByText('SUV');

        act(() => {
            fireEvent.click(optionOne);
        });

        // test to make sure SUV has been selected
        expect(carDropdown).toHaveValue('SUV');
    });
});

