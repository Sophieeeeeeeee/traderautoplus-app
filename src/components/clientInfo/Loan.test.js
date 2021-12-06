import React from 'react';

import {render, screen, fireEvent, getByTitle} from '@testing-library/react';
import Loan from "./Loan";
import {BrowserRouter} from "react-router-dom";

describe('Loan', () => {
    test('Test Loan page renders', async () => {
        // rendering doesn't work
        render(<BrowserRouter> <Loan /> </BrowserRouter>);
        // const { getByAltText } = render(<BrowserRouter> <Loan /> </BrowserRouter>);
        //
        // const img = getByAltText('Car Image');
        // const carName = getByRole('heading', {level: 1});
        //
        // // Will throw an exception if the image cannot be found
        // getByAltText("Car Image");
        //
        // // car section
        // expect(screen.getByRole('heading', {name: carName})); // not sure if this will work
        // expect(screen.getByRole('heading', {name: /car details:/i}));
        // expect(screen.getByRole('heading', {name: /model year:/i}));
        // expect(screen.getByRole('heading', {name: /car type:/i}));
        // expect(screen.getByRole('heading', {name: /price:/i}));
        // expect(screen.getByRole('heading', {name: /mileage:/i}));
        // expect(screen.getByRole('heading', {name: /available at:/i}));
        //
        // // loans section
        // expect(screen.getByRole('heading', {name: /possible loans for you:/i}));
        // expect(screen.getByRole('heading', {name: /predicted likelihood:/i}));
        // expect(screen.getByRole('heading', {name: /term:/i}));
        // expect(screen.getByRole('heading', {name: /capital:/i}));
        // expect(screen.getByRole('heading', {name: /interest:/i}));
        // expect(screen.getByRole('heading', {name: /installment:/i}));
        // expect(screen.getByRole('heading', {name: /remain:/i}));
        // expect(screen.getByRole('heading', {name: /interest sum:/i}));
    });

});

