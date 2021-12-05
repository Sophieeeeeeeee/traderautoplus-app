import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import CarItem from './CarItem';

describe('CarItem', () => {
    test('Simulate selection of a car item', async () => {
        // test image appears
        const { getByAltText, getByRole } = await render(<CarItem />);

        const image = getByAltText('Car Image');
        const carName = getByRole('heading')

        expect(image.src).toContain(image.props.src);

        // test car name appears
        screen.getByRole('heading').toHaveTextContent(carName.props.text);

        // test that clicking the car's card brings them to a new link;
        // if never called there will be a timed-out failure
        fireEvent.click(screen.getByRole('link'));
    });
});

