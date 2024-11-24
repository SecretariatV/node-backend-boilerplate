import app from './app';
import {env, logger} from './config';

const PORT = env.port;

app.listen(PORT, () => {
  logger.info(`Server is running on port: ${PORT}`);
});
