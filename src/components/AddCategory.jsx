import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length > 1) {
            // setCategories((categories) => [...categories, inputValue])
            onNewCategory(inputValue.trim())
            setInputValue('')
        }

    }

    return (
        <form onSubmit={onFormSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Search for gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}