/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
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
interface Decreto {
  id: string;
  nome: string;
  area: number;
  pessoasmetro: number;
  status: boolean;
}
interface Balance {
  entrada: string;
  saida: string;
  total: string;
}
const Dashboard: React.FC = () => {
  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);
  const [decreto, setDecreto] = useState<Decreto>({} as Decreto);

  async function loadAtendimentos(): Promise<void> {
    const response = await api.get('/atendimentos');
    setAtendimentos(response.data.atendimentos);
    setBalance(response.data.balance);
    setDecreto(response.data.decreto);
  }

  useEffect(() => {
    loadAtendimentos();
  }, []);

  const handdleAdd = useCallback(async () => {
    try {
      await api.post('/atendimentos', {
        decreto_id: decreto.id,
        tipo: 'entrada',
        valor: 1,
      });

      loadAtendimentos();
    } catch (err) {
      console.log(err);
    }
  }, [decreto]);

  const handdleRem = useCallback(async () => {
    try {
      await api.post('/atendimentos', {
        decreto_id: decreto.id,
        tipo: 'saida',
        valor: 1,
      });

      loadAtendimentos();
    } catch (err) {
      console.log(err);
    }
  }, [decreto]);

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
              <FiPlusCircle
                color="blue"
                size="80"
                onClick={() => handdleAdd()}
              />
            </Button>
            <Button>
              <FiMinusCircle
                color="red"
                size="80"
                onClick={() => handdleRem()}
              />
            </Button>
          </Buttons>
        </Content>
      </Container>
      <Footer>
        <nav>
          <p>Area de Atendimento: {decreto.area} m²</p>
          <p>Capacidade de Pessoas de acordo com Decreto 5.812:</p>
        </nav>
        <aside>
          <TotalPessoas>
            <div>
              <strong>
                {Math.round(decreto.area / decreto.pessoasmetro).toString()}
              </strong>
            </div>
          </TotalPessoas>
        </aside>
      </Footer>
    </>
  );
};
export default Dashboard;
