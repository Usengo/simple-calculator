import React, { useState } from 'react';

const DivisionCalculator = () => {
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [result, setResult] = useState(0);

  const handleChangeOne = (e) => {
    setInputOne(e.target.value);
  };

  const handleChangeTwo = (e) => {
    setInputTwo(e.target.value);
  };

  const handleDivideNumbers = () => {
    if (inputTwo === '0') {
     
      setResult('Cannot divide by zero');
    } else {
      setResult(Number(inputOne) / Number(inputTwo));
    }
  };

  return (
    <table id="calcu">
      <tr>
        <td colSpan={3}>
          <h1>
            {inputOne} / {inputTwo} = {result}
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
          <button className='colp' onClick={handleDivideNumbers} value={'Divide'} color={'warning'}>
            Divide
          </button>
        </td>
      </tr>
    </table>
  );
};

export default DivisionCalculator;
