
import React, { useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppContext } from '../App';

import Error from './Error';
import InputScreen from './InputScreen';
import Modal from './Modal';
import PhonePad from './PhonePad';
import Results from './Results';
import '../styles/_Home.scss';
import { convertNumberToWords } from '../store/action';
import { requestStatus } from '../assets/Constants.json';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('valid');
    const dispatch = useDispatch();
    const { words, hasError, requestStatus: apiRequestStatus } = useSelector(state => state);

    const handleClick = (value) => {
        setInputValue(`${inputValue}${value}`);
    }

    const handleDelete = () => {
        if (!inputValue) return;
        setInputValue(inputValue.slice(0, -1));
    }

    const handleSubmit = () => {
        inputValue && dispatch(convertNumberToWords(inputValue, selectedOption));
    }

    const handleOptionSelectionChange = (value) => {
        console.log('value is :: ', value);
        setSelectedOption(value)
    }

    const errorMessage = hasError ? 'Error while maki API call' :
        !words.length ? 'No matching word found for given number combinations.' : '';

    return (
        <main className="home">
            {apiRequestStatus === requestStatus.IN_PROGRESS && < Modal message="loading..." />}
            <div className="home__container">
                <Results
                    values={words}
                    errorMessage={errorMessage}
                    onSelectionChange={handleOptionSelectionChange}
                    selectedOption={selectedOption}
                />
                <InputScreen value={inputValue} />
                <PhonePad
                    onClick={handleClick}
                    onDelete={handleDelete}
                    onSubmit={handleSubmit}
                />
            </div>
        </main>
    )
}

export default Home
