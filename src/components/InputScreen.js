
import React from 'react';

import '../styles/_InputScreen.scss';

const InputScreen = ({ value }) => {
    return (
        <div className="input-screen">
            <input type="text" className="input-screen__input" value={value} disabled/>
        </div>
    )
}

export default InputScreen
