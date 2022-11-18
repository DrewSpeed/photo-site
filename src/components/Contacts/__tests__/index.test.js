import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../'

afterEach(cleanup);

describe('Contact component', () => { 
    it('renders', () => {
        render(<ContactForm />)
    })
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders h1', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    });
    it('renders button', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('submit-btn')).toHaveTextContent('Submit')
    });
})