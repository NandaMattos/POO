import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import DependentsController from './controllers/DependentsController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/dependents', DependentsController.index);
routes.get('/dependents/:id', DependentsController.show);
routes.post('/dependents', upload.array('images'), DependentsController.create);
routes.delete('/dependents/:id', DependentsController.delete);


export default routes;