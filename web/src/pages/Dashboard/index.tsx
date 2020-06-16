import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import {
  Container,
  Header,
  TotalPessoas,
  TotalLabel,
  Content,
  Labels,
  Buttons,
  Footer,
  Button,
} from './styles';
import logo from '../../assets/logo-oca.svg';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <nav>
        <img src={logo} alt="Guia de Serviços" />
        <h1> Contador de Fluxo de Pessoas </h1>
      </nav>
      <aside>
        <TotalLabel>
          <div>
            <strong>Total de Pessoas</strong>
          </div>
        </TotalLabel>
        <TotalPessoas>
          <div>
            <strong>122</strong>
          </div>
        </TotalPessoas>
      </aside>
    </Header>
    <Content>
      <Labels>
        <div>
          <strong>Entrada:</strong>
          <p>1230</p>
        </div>
        <div>
          <strong>Saida:</strong>
          <p>1230</p>
        </div>
      </Labels>
      <Buttons>
        <Button>
          <FiPlusCircle color="blue" size="80" />
        </Button>
        <Button>
          <FiMinusCircle color="red" size="80" />
        </Button>
      </Buttons>
    </Content>
    <Footer>
      <nav>
        <p>Area de Atendimento: 2000m²</p>
        <p>Capacidade de Pessoas de acordo com Decreto 5.812:</p>
      </nav>
      <aside>
        <strong>5000</strong>
      </aside>
    </Footer>
  </Container>
);
export default Dashboard;
