import React from 'react';

import {render, screen, fireEvent, getByTitle} from '@testing-library/react';
import Loan from "./Loan";

describe('Loan', () => {
    test('Test Loan page renders', async () => {
        const { getByAltText, getByRole, getByText } = await render(<Loan />);

        const img = getByAltText('Car Image');
        const carName = getByRole('heading', {level: 1});

        // image of car
        expect(img.src).toContain(img.props.src);

        // car section
        expect(screen.getByRole('heading', {name: carName})); // not sure if this will work
        expect(screen.getByRole('heading', {name: /car details/i}));
        expect(screen.getByRole('heading', {name: /model year:/i}));
        expect(screen.getByRole('heading', {name: /car type:/i}));
        expect(screen.getByRole('heading', {name: /price:/i}));
        expect(screen.getByRole('heading', {name: /mileage:/i}));
        expect(screen.getByRole('heading', {name: /available at:/i}));

        // loans section
        expect(screen.getByRole('heading', {name: /possible loans for you:/i}));
        expect(screen.getByRole('heading', {name: /predicted likelihood:/i}));
        expect(screen.getByRole('heading', {name: /term:/i}));
        expect(screen.getByRole('heading', {name: /capital:/i}));
        expect(screen.getByRole('heading', {name: /interest:/i}));
        expect(screen.getByRole('heading', {name: /installment:/i}));
        expect(screen.getByRole('heading', {name: /remain:/i}));
        expect(screen.getByRole('heading', {name: /interest sum:/i}));
    });

});

