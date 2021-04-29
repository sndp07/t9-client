import React from 'react';


const ValidOptionSelection = ({ value, onChange }) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <div >
            <label>
                <input
                    type="radio"
                    value="valid"
                    name="valid"
                    checked={value === 'valid'}
                    onChange={handleChange}
                />
                only valid
            </label>
            <label>
                <input
                    type="radio"
                    value="all"
                    name="all"
                    checked={value === 'all'}
                    onChange={handleChange}
                />
                all words
            </label>
        </div>
    )
}

export default ValidOptionSelection
