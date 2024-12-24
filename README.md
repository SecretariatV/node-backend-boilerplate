# **Node backend boilerplate**

[![Node.js Version](https://img.shields.io/badge/Node.js-%3E=20.17.0-brightgreen)](https://nodejs.org/) [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## **Description**

A comprehensive and professional Node.js backend boilerplate designed for building scalable and maintainable applications. This boilerplate features Google Authentication, Phone Code Authentication, logging, testing, and Git hooks for ensuring high code quality.

---

## **Table of Contents**

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [To-Do List](#to-do-list)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Authentication Setup](#authentication-setup)
7. [Code Quality Automation](#code-quality-automation)
8. [Configuration](#configuration)
9. [Testing](#testing)
10. [Contributing](#contributing)
11. [License](#license)
12. [Author](#author)

---

## **Features**

- 🌟 **Modern technologies**: Node.js, TypeScript, Express.js
- 🔒 **Authentication**:
  - Google OAuth2 using Passport.js
  - Local Email Authentication with JWT and password hashing
  - Phone Code Authentication using Twilio
- 📜 **Logging**: Integrated with Winston for structured loggin
- 🛡️ **Security**: Helmet, CORS, and rate limiting for secure APIs
- 🧪 **Testing**: Preconfigured with Vitest for unit and integration testing
- 🚀 **Code Quality**:
  - **Husky** for Git hooks
  - **ESLint** and **Prettier** for linting and formatting
- 📁 **Clean Folder Structure**: Scalable, modular, and maintainable folder structure
- 🌐 **API Documentation**: Integrated Swagger UI for auto-generated, interactive API docs
- ⚡ **Performance Optimization**: Follows best practices for fast API responses

---

## **Tech Stack**

- **Node.js** (v20 or higher)
- **Express.js**
- **TypeScript**
- **MongoDB** (or any other DB of your choice)
- **Passport.js** (Google Authentication)
- **Twilio** (Phone Code Authentication)
- **Google SMTP** (Email Verification)
- **Vitest** for testing
- **Winston** for logging
- **Husky** for Git hooks

---

## **To-Do List**

### **Core Features**

- [x] **Environment Setup**: Centralized environment variable configuration
- [x] **Google Authentication**: OAuth 2.0 integration
- [x] **Local Email Authentication**: JWT-based email and password login
- [x] **Email Verification**: Google SMTL integration
- [ ] **Phone Code Authentication**: Twilio-based OTP verification
- [x] **Logging**: Winston for error and activity tracking
- [x] **Error Handling**: Centralized error handling mechanism
- [ ] **Testing Framework**: Vitest for reliable unit and integration testing
- [ ] **Communicate with fe using session**: Implement session-based communication with `express-session`
- [ ] **API Documentation**: Add Swagger UI

### **Enhancements**

- [ ] **Role-based Access Control**: RBAC for admin and user permissions
- [ ] **API Rate Limiting**: Prevent abuse using `express-rate-limit`
- [ ] **File Upload Support**: Enable file uploads with Multer
- [ ] **Docker Support**: Containerize the application for deployment
- [ ] **CI/CD Pipeline**: Automate testing and deployment with GitHub Actions
- [x] **Custom Middleware**: Add reusable middleware for authentication and error handling

---

## **Getting Started**

### **Prerequisites**

1. Install [Node.js](https://nodejs.org/) (>= 20.0.0)
2. Install [MongoDB](https://www.mongodb.com/) or configure your preferred database.
3. Set up a Google OAuth2 application via [Google Cloud Console](https://console.cloud.google.com/).
4. Create a Twilio account and configure the messaging service.

### **Installation**

1. Clone the repository:
   ```
   git clone https://github.com/secretariatv/node-backend-boilerplate.git
   cd node-backend-boilerplate
   ```
2. Install dependencies:
   ```bash
   pnpm i
   ```
3. Configure environment variables:

   - Copy `.env.example` to `.env` and set up your values:
     ```bash
     cp .env.example .env
     ```

### **Run the Application**

- Development mode:
  ```bash
  pnpm dev
  ```
- Production mode:
  ```bash
  pnpm start
  ```

---

## **Project Structure**

```plaintext
node-backend-boilerplate/
├── src/
├── ├── config/         # Configuration files (env, database, etc.)
├── ├── controllers/    # Request handlers
├── ├── middleware/     # Custom middleware
├── ├── models/         # Database models
├── ├── routes/         # API routes
├── ├── services/       # Business logic and reusable services
├── ├── utils/          # Utility functions
├── ├── tests/          # Unit and integration tests
├── ├── app.ts          # Express app setup
├── ├── server.ts       # Entry point
├── .env.example        # Example environment variables
├── .eslint.config.mjs  # ESLint configuration
├── .prettierrc         # Prettier configuration
├── package.json        # Project metadata and dependencies
├── vitest.config.ts    # Vitest configuration
├── tsconfig.json       # TypeScript configuration
├── README.md           # Documentation
```

---

## **Authentication Setup**

### **Google Authentication**

1. **Set Up Google OAuth2 application**

- Go to the [Google Cloud Console](https://console.cloud.google.com/).
- Create a new project and enable the "OAuth2.0 API".
- Set up an OAuth consent screen and create credentials for a Web Application.
- Add authorized redirect URIs (e.g., `http://localhost:5000/auth/google/callback`).

2. **Environment Variables**
   Update your `.env` file with the following variables:

   ```plaintext
   GOOGLE_CLIENT_ID=<Your Google Client ID>
   GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
   GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
   ```

### **Phone Code Authentication**

1. **Set Up Twilio Account**

- Go to the [Twilio Console](https://www.twilio.com).
- Create a Messaging Service and note the SID.

2. **Environment Variables**
   Update your `.env` file with the following variables:
   ```plaintext
   TWILIO_ACCOUNT_SID=<Your Twilio Account SID>
   TWILIO_AUTH_TOKEN=<Your Twilio Auth Token>
   TWILIO_PHONE_NUMBER=<Your Twilio Phone Number>
   ```

---

## **Code Quality Automation**

This project uses **Husky** for Git hooks to enforce code quality ahd testing:

```bash
pnpm test:style
```

### **Scripts**

- `lint`: Runs ESLint
- `format`: Runs Prettier

---

## **Configuration**

Refer to `.env.example` for the full list of required environment variables.

---

## **Testing**

- Run all tests:

  ```bash
  pnpm test
  ```

- Generate coverage report:

  ```bash
  pnpm test:coverage
  ```

---

## **Contributing**

Welcoome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes.
4. Push the branch:

```bash
git push origin feature/your-feature-name
```

5. Open a pull request.

---

### **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### **Author**

- **Name**: Oliver Boucher
- **Email**: [Gmail](mailto:oliver.b25.f@gmail.com)
- **Portfolio**: [Portfolio]()
- **GitHub**: [Github](https://github.com/secretariatv)
- **Twitter**: [Twitter](https://x.com/ovb_corder)

Feel free to reach out for any questions or feedback about this project!
