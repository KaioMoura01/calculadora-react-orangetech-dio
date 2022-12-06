import {Container, Content, Column, Row} from "./styles";
import {Button} from "./components/Button";
import {Input} from "./components/Input"

const App = () => {
  return (
    <Container>
      <Content>
        <Input/>
        <Row>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
        </Row>

        <Row>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
        </Row>
        
      </Content>
    </Container>
  );
}
export default App;