import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
const result = dotenv.config();
if (result.error) {
  dotenv.config({ path: '.env.default' });
}

import app from './app';
import logger from './logger';

// createConnection()
//   .then(async connection => {
app.listen(app.get('port'), (): void => {
  logger.info(`*\t🌏 Express server started at http://localhost:${app.get('port')}\t\t*`);
  if (process.env.NODE_ENV === 'development') {
    logger.debug(`*\t⚙️  Swagger UI hosted at http://localhost:${app.get('port')}/dev/api-docs\t*`);
  }
});
// })
// .catch(error => console.log(error));

process.on('SIGINT', () => {
  logger.info('\nGracefully shutting down');
});
