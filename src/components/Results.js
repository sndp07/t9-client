
import React from 'react';

import '../styles/_Results.scss';
import Error from './Error';
import ValidOptionSelection from './ValidOptionSelection';


const Value = ({ value, lastValue }) => (
    <div className="results__value">{`${value}${!lastValue ? ',' : ''}`}</div>
)

const Results = ({ values = [], errorMessage, onSelectionChange, selectedOption }) => {
    return (
        <div className="results">
            <div className="results__header-container">
                <h4 className="results__header">Results:</h4>
                <ValidOptionSelection value={selectedOption} onChange={onSelectionChange} />
            </div>
            <div className="results__container">
                {!!values.length ?
                    values.map((value, index) => <Value value={value} key={value} lastValue={index === (values.length - 1)} />) :
                    <Error message={errorMessage} />
                }
            </div>
        </div>
    )
}

export default Results
