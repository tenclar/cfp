import { getRepository } from 'typeorm';

import Decreto from '../models/Decreto';

interface Request {
  area: number;
  pessoasmetro: number;
  decreto: string;
}
class CreateDecretoService {
  async execute({ area, pessoasmetro, decreto }: Request): Promise<Decreto> {
    const DecretoRepository = getRepository(Decreto);

    const user = DecretoRepository.create({
      area,
      pessoasmetro,
      decreto,
    });
    await DecretoRepository.save(user);
    return user;
  }
}
export default CreateDecretoService;
