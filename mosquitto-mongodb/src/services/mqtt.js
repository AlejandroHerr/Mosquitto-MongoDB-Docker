import mqtt from 'mqtt';

import logger from './logger';

export default () => new Promise(async (resolve) => {
  try {
    const options = {
      clientId: process.env.CLIENT_NAME,
      port: process.env.MQTT_PORT,
      host: process.env.MQTT_HOST,
      protocol: process.env.MQTT_PROTOCOL,
      rejectUnauthorized: false,
    };

    logger.debug(`Connecting to ${options.protocol}://${options.host}:${options.port}`);

    const client = mqtt.connect(options);

    client.on('connect', () => {
      logger.info(`Connected to ${options.protocol}://${options.host}:${options.port}`);

      resolve(client);
    });
  } catch (error) {
    logger.error(error.message);

    throw error;
  }
});
