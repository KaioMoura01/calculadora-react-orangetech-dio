import {Container, Content, Row} from "./styles";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  let result = '0';
  
  const handleOnClear = () => {
    setCurrentNumber('0');
    result = '0';
  }

  const handleOnClearAll = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    result = '0';
  }


  const handleSumNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      result = String(sum);
      setFirstNumber(result);
      console.log(result);
      handleOnClear();
    }
  }

  const handleMinNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('-');
    }else{
      const minus = Number(firstNumber) - Number(currentNumber);
      result = String(minus);
      setFirstNumber(result);
      console.log(result);
      handleOnClear();
    }
  }

  const handleMultNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('*');
    }else{
      const mult = Number(firstNumber) * Number(currentNumber);
      result = String(mult);
      setFirstNumber(result);
      console.log(result);
      handleOnClear();
    }
  }

  const handleDivNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('/');
    }else{
      const div = Number(firstNumber) / Number(currentNumber);
      result = String(div);
      setFirstNumber(result);
      console.log(result);
      handleOnClear();
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== 0){
      switch(operation){
        case '+': handleSumNumbers();
          break;
        case '-': handleMinNumbers();
          break;
        case '/': handleDivNumbers();
          break;
        case '*': handleMultNumbers();
          break;
        default:
          break;
      }
    }
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }
  return (
    <Container>
      <Content>
        <Input value = {currentNumber}/>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinNumbers}/>
        </Row>
        <Row>
          <Button label="C" onClick={() => handleOnClearAll()}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="*" onClick={handleMultNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}
export default App;