import { getRepository } from 'typeorm';

import Atendimento from '../models/Atendimento';

interface Request {
  decreto_id: string;
  tipo: 'entrada' | 'saida';
  valor: number;
}
class CreateAtendimentoService {
  async execute({ decreto_id, tipo, valor }: Request): Promise<Atendimento> {
    const AtendimentoRepository = getRepository(Atendimento);

    const user = AtendimentoRepository.create({
      decreto_id,
      tipo,
      valor,
    });
    await AtendimentoRepository.save(user);
    return user;
  }
}
export default CreateAtendimentoService;
