import {Express} from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import {logger} from './logger';
import {env} from './env';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node backend boilerplate API Decumentation',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {},
    },
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  logger.info(`Swagger is running on ${env.port}/api-docs`);
};
