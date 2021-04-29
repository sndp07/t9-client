
import React from 'react';

import '../styles/_Error.scss';

const Error = ({ message }) => {
    return (
        <div className="error">
            {message}
        </div>
    )
}

export default Error
