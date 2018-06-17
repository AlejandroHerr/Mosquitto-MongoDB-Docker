import Message from './models/Message';

import dbConnect from './services/db';
import logger from './services/logger';
import mqttConnect from './services/mqtt';

const main = async () => {
  await dbConnect();

  const client = await mqttConnect();

  client.subscribe('#');

  client.on('message', async (topic, message) => {
    try {
      const { _id } = await Message.create({
        topic,
        message: message.toString(),
      }).save();

      logger.debug(`Message ${_id} persisted`);
    } catch (error) {
      logger.error(error.message);
    }
  });

  client.on('error', (error) => {
    logger.error(error.message);
  });
};

main()
  .catch((error) => {
    logger.fatal(error.message);
  });
