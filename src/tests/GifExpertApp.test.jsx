import { fireEvent, getAllByText, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp"

describe('<GiftExpertApp /> testing', () => {

    const inputTestStrig = 'this is a test';

    test('should match snapshot', () => {

        const { container } = render(<GifExpertApp />);
        // screen.debug();

        expect(container).toMatchSnapshot();

    });

    test('should update input value when writing', () => {

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');


        fireEvent.input(input, { target: { value: inputTestStrig } });
        // screen.debug();

        expect(input.value).toBe(inputTestStrig);

    });

    test('should add unique category when submitting form', () => {

        render(<GifExpertApp />);
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        // Try to submit form with same input
        fireEvent.input(input, { target: { value: inputTestStrig } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: inputTestStrig } });
        fireEvent.submit(form);

        // Create different input
        fireEvent.input(input, { target: { value: inputTestStrig + 1 } });
        fireEvent.submit(form);

        expect(screen.getAllByText(inputTestStrig).length).toBe(1);
        expect(screen.getAllByText(inputTestStrig + 1).length).toBe(1);
        expect(screen.getAllByLabelText('gif-grid').length).toBe(3);


    });




});