import React from 'react';
import {
    render,
    screen,
    fireEvent,
    queryByTestId,
    getByText, waitFor, getByDisplayValue,
} from '@testing-library/react';
import CarFilter from './CarFilter';


describe('CarFilter', () => {

    test('Test Rendering', async () => {
        render(<CarFilter/>);

        expect(screen.getByText('Select vehicle type')).toBeInTheDocument();

    });

    test('Test option selected', async () => {
        const {getByText, queryByTestId} = render(<CarFilter/>);

        const mySelectedComponent = queryByTestId("select");

        expect(mySelectedComponent).toBeDefined();
        expect(mySelectedComponent).not.toBeNull();

        fireEvent.keyDown(mySelectedComponent.firstChild, {key: 'ArrowDown'});
        await waitFor(() => getByText('SUV'));
        fireEvent.click(getByText('SUV'));

        expect(screen.getByText('SUV')).toBeVisible();
    });
});

