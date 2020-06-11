import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateAtendimentoService from '../services/CreateAtendimentoService';
import Atendimento from '../models/Atendimento';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const atendimentoRouter = Router();
atendimentoRouter.use(ensureAuthenticated);

atendimentoRouter.get('/', async (req, res) => {
  const atendimentosRepository = getRepository(Atendimento);
  const atendimentos = await atendimentosRepository.find();
  return res.json(atendimentos);
});

atendimentoRouter.post('/', async (request, response) => {
  const { decreto_id, tipo, valor } = request.body;
  const createAtendimento = new CreateAtendimentoService();
  const atendimento = await createAtendimento.execute({
    decreto_id,
    tipo,
    valor,
  });

  return response.json(atendimento);
});

export default atendimentoRouter;
