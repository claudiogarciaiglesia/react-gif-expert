import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory"

describe('<AddCategory /> testing', () => {

    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();


    test('should change value of textbox', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });
        // screen.debug();

        expect(input.value).toBe('Saitama');

    });

    test('should call onNewCategory if input has value', () => {

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('should\'t call onNewCategory if input is empty', () => {

        onNewCategory.mockClear();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();


    })

})