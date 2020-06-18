import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateDecretoService from '../services/CreateDecretoService';
import Decreto from '../models/Decreto';
/* import ensureAuthenticated from '../middlewares/ensureAuthenticated'; */

const decretoRouter = Router();
/* decretoRouter.use(ensureAuthenticated); */

decretoRouter.get('/', async (req, res) => {
  const decretosRepository = getRepository(Decreto);
  const decretos = await decretosRepository.find();
  return res.json(decretos);
});

decretoRouter.post('/', async (request, response) => {
  const { nome, area, pessoasmetro, status } = request.body;
  const createDecreto = new CreateDecretoService();
  const decreto = await createDecreto.execute({
    nome,
    area,
    pessoasmetro,
    status,
  });

  return response.json(decreto);
});

export default decretoRouter;
