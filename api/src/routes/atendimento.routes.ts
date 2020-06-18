import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import CreateAtendimentoService from '../services/CreateAtendimentoService';
import AtendimentosRepository from '../repositories/AtendimentosRepository';
import Decreto from '../models/Decreto';
/* import ensureAuthenticated from '../middlewares/ensureAuthenticated'; */

const atendimentoRouter = Router();
/* atendimentoRouter.use(ensureAuthenticated); */

atendimentoRouter.get('/', async (req, res) => {
  const atendimentosRepository = getCustomRepository(AtendimentosRepository);
  const decretoRepository = getRepository(Decreto);
  const decreto = await decretoRepository.findOne({
    where: {
      status: true,
    },
  });
  const today = new Date();
  const atendimentos = await atendimentosRepository.find({
    where: {
      created_at: today,
      decreto_id: decreto?.id,
    },
  });
  const balance = await atendimentosRepository.getBalance();
  return res.json({ atendimentos, balance, decreto });
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
