import {Router} from 'express';

import {register} from '../controllers/authController';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth management API
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *  post:
 *      summary: Register a new user
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: The user's email address
 *                          password:
 *                              type: string
 *                              description: The user's password
 *      responses:
 *          201:
 *              description: User created successfully
 *          404:
 *              description: User already
 */
router.post('/register', register);

export default router;
