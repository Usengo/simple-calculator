import './App.css'
import Button from './components/Button'
import DivisionCalculator from './components/Division'
import SubtractionCalculator from './components/subtraction'
import MultiplicationCalculator from './components/multiplication'
import { useState } from 'react'

function App() {
  const buttonValues = {
    columnOne: [1, 2, 3, '/'],
    columnTwo: [4, 5, 6, '*'],
    columnThree: [7, 8, 9, '-'],
    columnFour:[0, '.', '%' ,'='],
  }


  const mapButtons = (btnArray = []) => {
    return btnArray.map((value) => (
      <td>
        <Button value={value} color="primary" />
      </td>
    ))
  }

  const [result, setResult] = useState(0)
  const [inputOne, setInputOne] = useState(0)
  const [inputTwo, setInputTwo] = useState(0)
  const [table, setTable] = useState(1)

  const handlChange = (event) => {
    setResult(event.target.value)
  }

  const handleChangeOne = (e) => {
    setInputOne(e.target.value)
  }
  const handleChangeTwo = (e) => {
    setInputTwo(e.target.value)
  }

  const FullCalculator = () => {
    return (
      <table id="calcu">
        <tr>
          <td colspan="3">
            <input
              defaultValue={result}
              onChange={handlChange}
              type="number"
              id="result"
            />
          </td>
          <td>
            <Button value={'Clear'} color={'warning'} />
          </td>
        </tr>

        <tr>{mapButtons(buttonValues.columnOne)}</tr>
        <tr>{mapButtons(buttonValues.columnTwo)}</tr>
        <tr>{mapButtons(buttonValues.columnThree)}</tr>
        <tr>{mapButtons(buttonValues.columnFour)}</tr>
      </table>
    )
  }

  const AdditionCalculator = () => {
    const handleAddNumbers = () => {
      setResult(Number(inputOne) + Number(inputTwo))
    }

    return (
      <table id="calcu">
        <tr>
          <td colspan="3">
            <h1>
              {inputOne} + {inputTwo} = {result}{' '}
            </h1>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <input
              defaultValue={inputOne}
              onChange={handleChangeOne}
              type="number"
            />
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <input
              defaultValue={inputTwo}
              onChange={handleChangeTwo}
              type="number"
            />
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <Button
              onClick={handleAddNumbers}
              value={'Add'}
              color={'warning'}
            />
          </td>
        </tr>
      </table>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <tr>
          <td colspan="3">
            <Button
              value="Full Calculator"
              onClick={() => setTable(1)}
              color="warning"
            />
          </td>
          <td colspan="3">
            <Button value="Addtion Calculator" onClick={() => setTable(2)} />{' '}
          </td>


          <td colspan="3">
            <Button value="Subtraction Calculator" onClick={() => setTable(3)} />{' '}
          </td>
          <td colspan="3">
            <Button value="Division Calculator" onClick={() => setTable(4)} />{' '}
          </td>
          <td colspan="3">
            <Button value="Multiplication Calculator" onClick={() => setTable(5)}  />{' '}
          </td>
        </tr>
        <hr />
        <br />

        {table === 1 ? <FullCalculator /> : table === 3 ?
          <SubtractionCalculator></SubtractionCalculator> : table === 4 ?
            <DivisionCalculator></DivisionCalculator> : table === 5 ?
              <MultiplicationCalculator></MultiplicationCalculator>
              : <AdditionCalculator />}
      </header>
    </div>
  )
}

export default App

// DO NOT REPEACT URSEF





