import React from 'react'
import { useDispatch } from 'react-redux'
import { changeSelectedButtonIndex } from '../utils/configSlice';

const Button = ({ name, index }) => {

    const dispatch = useDispatch();

    const handleButtonClick = (index) => {
        dispatch(changeSelectedButtonIndex(index));
    }

    return (
        <div className='px-3 mx-1 text-sm font-semibold rounded-2xl py-1 whitespace-nowrap'>
            <button onClick={() => handleButtonClick(index)}>
                {name}
            </button>
        </div>
    )
}

export default Button
