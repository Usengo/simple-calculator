import React, { useState } from 'react';

const MultiplicationCalculator = () => {
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [result, setResult] = useState(0);

  const handleChangeOne = (e) => {
    setInputOne(e.target.value);
  };

  const handleChangeTwo = (e) => {
    setInputTwo(e.target.value);
  };

  const handleMultiplyNumbers = () => {
    setResult(Number(inputOne) * Number(inputTwo));
  };

  return (
    <table id="calcu">
      <tr>
        <td colSpan={3}>
          <h1>
            {inputOne} × {inputTwo} = {result}
          </h1>
        </td>
      </tr>
      <tr>
        <td colSpan={3}>
          <input
            value={inputOne}
            onChange={handleChangeOne}
            type="number"
          />
        </td>
      </tr>
      <tr>
        <td colSpan={3}>
          <input
            value={inputTwo}
            onChange={handleChangeTwo}
            type="number"
          />
        </td>
      </tr>
      <tr>
        <td colSpan={3}>
          <button className='colp' onClick={handleMultiplyNumbers} value={'Multiply'} color={'warning'}>
            Multiply
          </button>
        </td>
      </tr>
    </table>
  );
};

export default MultiplicationCalculator;
