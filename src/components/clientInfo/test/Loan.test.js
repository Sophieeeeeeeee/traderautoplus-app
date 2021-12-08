import React from 'react';

import {render, screen, fireEvent, getByTitle, act, getByRole} from '@testing-library/react';
import Loan from "../Loan";
import {Router} from "react-router-dom";
import { createMemoryHistory } from "history";

const testPropsFromBrowse = {
    fromBrowse: true,
    allInfo: ["2017", "Honda Pillot 4WD", "SUV", "28560", "Barrie Honda", "4", "145174",
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://www.blogcdn.com/www.autoblog.com/media/2011/04/01-2011-honda-pilot-opt.jpg",
        [{
            "1": ["36", "Almost Guaranteed", {
                "capital": 631.44,
                "interest": 47.91,
                "installment": 679.35,
                "remain": 22928.56,
                "interestSum": 47.91
            }]
        }]],
    loanList: [],
};

const testPropsNotFromBrowse = {
    location: {
        state: {
            fromBrowse: false,
            allInfo: "",
            loanList: [],
        }
    }
};

describe('Loan', () => {
    test('Test Loan page from browse',  () => {
        const history = createMemoryHistory();
        history.push('/', testPropsFromBrowse);

        render(<Router history={history}> <Loan {...testPropsFromBrowse}/> </Router>);

        // Will throw an exception if the image cannot be found
        const carImage = screen.getByRole('img');
        expect(carImage).toHaveAttribute('src', 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://www.blogcdn.com/www.autoblog.com/media/2011/04/01-2011-honda-pilot-opt.jpg')
        expect(carImage).toHaveAttribute('alt', 'Car Image');

        // car section
        expect(screen.getByText('Honda Pillot 4WD')).toBeInTheDocument();
        expect(screen.getByText('Car Details:')).toBeInTheDocument();
        expect(screen.getByText('Model Year:')).toBeInTheDocument();
        expect(screen.getByText('Car Type:')).toBeInTheDocument();
        expect(screen.getByText('Price:')).toBeInTheDocument();
        expect(screen.getByText('Mileage:')).toBeInTheDocument();
        expect(screen.getByText('Available at:')).toBeInTheDocument();

        // loans section
        expect(screen.getByText('Possible loans for you:')).toBeInTheDocument();
        expect(screen.getByText('Predicted likelihood:')).toBeInTheDocument();
        expect(screen.getByText('Term:')).toBeInTheDocument();
        expect(screen.getByText('Capital:')).toBeInTheDocument();
        expect(screen.getByText('Interest:')).toBeInTheDocument();
        expect(screen.getByText('Installment:')).toBeInTheDocument();
        expect(screen.getByText('Remain:')).toBeInTheDocument();
        expect(screen.getByText('Interest sum:')).toBeInTheDocument();
    });

    test('Test Loan page not from browse', async () => {
        const history = createMemoryHistory();
        history.push('/', testPropsNotFromBrowse);

        render(<Router history={history}> <Loan {...testPropsNotFromBrowse}/> </Router>);

        expect(screen.getByText('Please sign in / sign up first!')).toBeInTheDocument();
    });
});

