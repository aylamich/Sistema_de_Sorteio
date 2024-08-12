import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';


function App() {
  const [numeroInicial, setNumeroInicial] = useState('');
  const [numeroLimite, setNumeroLimite] = useState('');
  const [numeroSorteado, setNumeroSorteado] = useState('');

  const handlenumeroInicial = (event)=>{
    setNumeroInicial(event.target.value);
  }
  const handlenumeroLimite = (event)=>{
    setNumeroLimite(event.target.value);
  }
async function sortear(){
    await axios.get('http://127.0.0.1:5000/api/sortear?num1='+numeroInicial+'&num2='+numeroLimite)
           .then(response => {setNumeroSorteado('O numero sorteado foi: '+response.data.message); })
           .catch(error   => { console.error('Erro ao buscar dados:', error); });
    // setNumeroSorteado('O numero sorteado foi: '+Math.floor(Math.random() * (numeroLimite - numeroInicial + 1)) + numeroInicial);
  }

  return (
    <>
      <h1>
        Sistema de Sorteio
      </h1>
      <h3>
        Informe o intervalo de números para o sorteio
      </h3>
      <br />
      <Form>
      
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Informe o numero inicial
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="" style={{ width: '200px' }} value={numeroInicial} onChange={handlenumeroInicial}  />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Informe o numero limite
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="" style={{ width: '200px' }} value={numeroLimite} onChange={handlenumeroLimite} />
        </Col>
      </Form.Group>
      <Button variant="primary" onClick={sortear}>Sortear</Button>{' '}<br/>
      <Card>
      <Card.Body>{numeroSorteado}</Card.Body>
    </Card>
    </Form>
    </>

  );
}

export default App;
