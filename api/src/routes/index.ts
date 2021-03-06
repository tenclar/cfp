import { Router } from 'express';
import atendimentosRouter from './atendimento.routes';
import decretosRouter from './decreto.routes';
import usersRouter from './user.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);

routes.use('/decretos', decretosRouter);
routes.use('/atendimentos', atendimentosRouter);
export default routes;
