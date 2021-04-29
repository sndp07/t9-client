
import React from 'react';

import { phonePad } from '../assets/Constants.json';
import '../styles/_PhonePad.scss';

const DELETE_KEY = 'DEL';
const SUBMIT_KEY = 'SUBMIT'

const Key = ({ number, letters, onClick, onDelete, onSubmit }) => {

    const handleClick = () => {
        if (letters === DELETE_KEY) {
            onDelete()
        } else if (letters === SUBMIT_KEY) {
            onSubmit()
        } else {
            onClick(number);
        }
    }

    return (
        <div className="phone-pad__key" onClick={handleClick}>
            <div className="phone-pad__key-number">{number}</div>
            <div className="phone-pad__key-letters">{letters}</div>
        </div>
    )
}

const PhonePad = (props) => {
    return (
        <div className="phone-pad">
            {phonePad.map(key => (
                <Key
                    {...key}
                    key={key.number}
                    {...props}
                />
            ))}
        </div>
    )
}

export default PhonePad
