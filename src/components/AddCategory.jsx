import { useState } from "react"

export const AddCategory = ({ setCategories, onNewCategory }) => {

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
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Search for gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
