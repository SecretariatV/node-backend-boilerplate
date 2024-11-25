import {Router} from 'express';
import passport from 'passport';

import {register} from '../controllers/authController';
import {env} from '../config';
import {IUser} from '../types';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Endpoints for user authentication and registration
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Allows users to create a new account using their email and password.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address. Must be unique.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: User's password. Minimum 8 characters.
 *                 example: password123
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input (e.g., missing required fields or invalid email format)
 *       409:
 *         description: User with the provided email already exists
 */
router.post('/register', register);

/**
 * @swagger
 * /api/v1/auth/google:
 *   get:
 *     summary: Initiate Google OAuth authentication
 *     description: Redirects the user to Google for OAuth authentication. Upon success, the user is authenticated and returned to the app.
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirect to Google OAuth page
 *         headers:
 *           Location:
 *             description: URL to Google OAuth
 *             schema:
 *               type: string
 *               example: https://accounts.google.com/o/oauth2/auth
 *       500:
 *         description: Internal server error during authentication
 */
router.get('/google', (req, res, next) => {
  passport.authenticate('google', {scope: ['profile', 'email']})(req, res, next);
});

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', (err: Error, user: IUser) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login');
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect(`${env.frontendUrl}/`);
    });
  })(req, res, next);
});

export default router;
