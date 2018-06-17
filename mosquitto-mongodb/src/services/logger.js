import path from 'path';
import bunyan from 'bunyan';
import StdoutStream from 'bunyan-stdout-stream';
import clc from 'cli-color';

const name = 'mosquitto-mongodb';
const level = process.env.DEBUG
  ? 'debug'
  : 'info';
const logPath = path.resolve(__dirname, '../', '../', 'log', `${name}.log`);

const stdoutStreamConfig = {
  colors: {
    20: {
      level: clc.bgGreenBright('d'),
      source: source => clc.greenBright(source),
    },
    60: {
      level: clc.bgRedBright('c'),
      source: source => clc.redBright(source),
    },
  },
};

export default bunyan.createLogger({
  name,
  streams: [
    {
      level: 10,
      type: 'raw',
      stream: new StdoutStream(stdoutStreamConfig),
    },
    {
      level,
      path: logPath,
    },
  ],
});
