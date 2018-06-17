import { connect } from 'camo';

import logger from './logger';

const uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

export default () => connect(uri)
  .then((db) => {
    logger.info(`Connected to ${uri}`);

    return db;
  })
  .catch((error) => {
    logger.error(`Error connecting to ${uri}`, error);

    throw error;
  });
