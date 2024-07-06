import React, { useState } from 'react';

function App() {
  const buttonValues = {
    columnOne: [1, 2, 3, '/'],
    columnTwo: [4, 5, 6, '*'],
    columnThree: [7, 8, 9, '-'],
    columnFour: [0, '.', '%', '='],
  };

  const mapButtons = (btnArray = []) => {
    return btnArray.map((value) => (
      <td key={value}>
        <Button value={value} color="primary" onClick={handleButtonClick} />
      </td>
    ));
  };

  const [result, setResult] = useState('');
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (value) => {
    if (value === '=') {
      // Perform calculation
      calculateResult();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      // Set the operator
      setOperator(value);
    } else {
      // Update input based on operator
      if (operator === null) {
        setInputOne(inputOne + value);
      } else {
        setInputTwo(inputTwo + value);
      }
    }
  };

  const calculateResult = () => {
    if (inputOne !== '' && inputTwo !== '' && operator !== null) {
      const num1 = parseFloat(inputOne);
      const num2 = parseFloat(inputTwo);

      switch (operator) {
        case '+':
          setResult(num1 + num2);
          break;
        case '-':
          setResult(num1 - num2);
          break;
        case '*':
          setResult(num1 * num2);
          break;
        case '/':
          setResult(num1 / num2);
          break;
        default:
          setResult('Error');
      }
      setInputOne('');
      setInputTwo('');
      setOperator(null);
    }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>{mapButtons(buttonValues.columnOne)}</tr>
          <tr>{mapButtons(buttonValues.columnTwo)}</tr>
          <tr>{mapButtons(buttonValues.columnThree)}</tr>
          <tr>{mapButtons(buttonValues.columnFour)}</tr>
        </tbody>
      </table>
      <div>
        <input type="text" value={result} onChange={handleResultChange} />
      </div>
    </div>
  );

  function handleResultChange(event) {
    setResult(event.target.value);
  }
}

export default App;
