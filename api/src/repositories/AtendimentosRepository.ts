import { EntityRepository, Repository } from 'typeorm';

import Atendimento from '../models/Atendimento';

interface Balance {
  entrada: number;
  saida: number;
  total: number;
}

@EntityRepository(Atendimento)
class AtendimentosRepository extends Repository<Atendimento> {
  public async getBalance(): Promise<Balance> {
    const atendimentos = await this.find();

    const { entrada, saida } = atendimentos.reduce(
      (accumulator, atendimento) => {
        switch (atendimento.tipo) {
          case 'entrada':
            accumulator.entrada += Number(atendimento.valor);
            break;
          case 'saida':
            accumulator.saida += Number(atendimento.valor);
            break;
          default:
            break;
        }
        return accumulator;
      },
      {
        entrada: 0,
        saida: 0,
        total: 0,
      },
    );

    const total = entrada - saida;

    return { entrada, saida, total };
  }
}

export default AtendimentosRepository;
