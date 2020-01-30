import dotenv from 'dotenv';
const result = dotenv.config();
if (result.error) {
  dotenv.config({ path: '.env.default' });
}

import app from './app';
import logger from './logger';

if (process.env.MONGO_URL == undefined) {
  logger.log({
    level: 'error',
    message: 'MONGO_URL not specified in environment',
  });
  process.exit(1);
  process.stdin.emit('SIGINT');
} else {
  app.listen(app.get('port'), (): void => {
    logger.info(`*\t🌏 Express server started at http://localhost:${app.get('port')}\t\t*`);
    if (process.env.NODE_ENV === 'development') {
      logger.debug(`*\t⚙️  Swagger UI hosted at http://localhost:${app.get('port')}/dev/api-docs\t*`);
    }
  });
}

// Close the Mongoose connection, when receiving SIGINT
process.on('SIGINT', () => {
  logger.info('\nGracefully shutting down');
});
