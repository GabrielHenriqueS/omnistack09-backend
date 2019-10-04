import {Router} from 'express';

import SessionController from './controllers/SessionController'
import SpotController from './controllers/SpotController'

const routes = new Router();


routes.post('/sessions', SessionController.store);
routes.post('/spots', SpotController.store);


export default routes;