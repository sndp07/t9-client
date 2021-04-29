
import React from 'react';

import '../styles/_Modal.scss';

const Modal = ({ message, onClose, showButton }) => (
    <div className="modal">
        <div className="modal__container">
            <h4>{message}</h4>
        </div>
        {/* {!!showButton && <Button label="Close" onClick={onClose} />} */}
    </div>
)

export default Modal
