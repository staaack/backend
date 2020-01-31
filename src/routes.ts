import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../openapi.json';

import * as TimesheetController from './controllers/timesheet';
import MockDataController from './controllers/mock-data/index';

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const router = Router();

//Mock data routes

router.get('/mock-data', MockDataController);

//Timesheet routes

router.post('/timesheet', TimesheetController.add);
router.get('/timesheet', TimesheetController.get);
router.put('/timesheet', TimesheetController.update);
router.delete('/timesheet', TimesheetController.remove);

// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));
}

export default router;
