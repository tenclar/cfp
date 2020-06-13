import { getCustomRepository } from 'typeorm';
import AtendimentosRepository from '../repositories/AtendimentosRepository';
import AppError from '../errors/AppError';
import Atendimento from '../models/Atendimento';

interface Request {
  decreto_id: string;
  tipo: 'entrada' | 'saida';
  valor: number;
}
class CreateAtendimentoService {
  public async execute({
    decreto_id,
    tipo,
    valor,
  }: Request): Promise<Atendimento> {
    const atendimentosRepository = getCustomRepository(AtendimentosRepository);
    const { total } = await atendimentosRepository.getBalance();

    if (tipo === 'saida' && total < valor) {
      throw new AppError('You do not have eough balance');
    }

    const atendimento = atendimentosRepository.create({
      decreto_id,
      tipo,
      valor,
    });

    await atendimentosRepository.save(atendimento);
    return atendimento;
  }
}
export default CreateAtendimentoService;
