import { getRepository } from 'typeorm';

import Decreto from '../models/Decreto';

interface Request {
  area: number;
  pessoasmetro: number;
  nome: string;
  status: boolean;
}
class CreateDecretoService {
  async execute({
    area,
    pessoasmetro,
    nome,
    status,
  }: Request): Promise<Decreto> {
    const DecretoRepository = getRepository(Decreto);

    const user = DecretoRepository.create({
      area,
      pessoasmetro,
      nome,
      status,
    });
    await DecretoRepository.save(user);
    return user;
  }
}
export default CreateDecretoService;
