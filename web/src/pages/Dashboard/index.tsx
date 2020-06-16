import React, { useState, useEffect } from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import api from '../../services/api';
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

interface Atendimento {
  id: string;
  decreto_id: number;
  valor: number;
  tipo: 'entrada' | 'saida';
}

interface Balance {
  entrada: string;
  saida: string;
  total: string;
}
const Dashboard: React.FC = () => {
  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadAtendimentos(): Promise<void> {
      const response = await api.get('/atendimentos');
      setAtendimentos(response.data.atendimentos);
      setBalance(response.data.balance);
    }
    loadAtendimentos();
  }, []);

  return (
    <>
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
                <strong>{balance.total}</strong>
              </div>
            </TotalPessoas>
          </aside>
        </Header>
        <Content>
          <Labels>
            <div>
              <strong>Entrada:</strong>
              <p>{balance.entrada}</p>
            </div>
            <div>
              <strong>Saida:</strong>
              <p>{balance.saida}</p>
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
      </Container>
      <Footer>
        <nav>
          <p>Area de Atendimento: 2000m²</p>
          <p>Capacidade de Pessoas de acordo com Decreto 5.812:</p>
        </nav>
        <aside>
          <TotalPessoas>
            <div>
              <strong>5000</strong>
            </div>
          </TotalPessoas>
        </aside>
      </Footer>
    </>
  );
};
export default Dashboard;
