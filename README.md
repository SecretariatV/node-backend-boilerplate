## **Node backend boilerplate**

[![Node.js Version](https://img.shields.io/badge/Node.js-%3E=20.17.0-brightgreen)](https://nodejs.org/) [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

### **Description**

A comprehensive and professional Node.js backend boilerplate designed for building scalable and maintainable applications. This boilerplate features Google Authentication, Phone Code Authentication, logging, testing, and Git hooks for ensuring high code quality.

---

### **Table of Contents**

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Authentication Setup](#authentication-setup)
6. [Code Quality Automation](#code-quality-automation)
7. [Configuration](#configuration)
8. [Scripts](#scripts)
9. [Contributing](#contributing)
10. [License](#license)
11. [Author](#author)

---

### **Features**

- 🌟 **Modern technologies**: Node.js, TypeScript, Express.js
- 🔒 **Authentication**:
  - Google OAuth2 using Passport.js
  - Phone Code Authentication using Twilio
- 📜 **Logging**: Integrated with Winston for structured loggin
- 🛡️ **Security**: Helmet, CORS, and other security best practices
- 🧪 **Testing**: Preconfigured with Jest for unit testing
- 🚀 **Code Quality**:
  - **Husky** for Git hooks
  - **ESLint** and **Prettier** for linting and formatting
- 📁 **Clean Folder Structure**: Scalable and maintainable
- 🌐 **API Documentation**: Swagger UI integration

---

### **Tech Stack**

- **Node.js** (v20 or higher)
- **Express.js**
- **TypeScript**
- **MongoDB** (or any other DB of your choice)
- **Passport.js** (Google Authentication)
- **Twilio** (Phone Code Authentication)
- **Jest** for testing
- **Winston** for logging
- **Husky** for Git hooks

---

### **Getting Started**

#### **Prerequisites**

1. Install [Node.js](https://nodejs.org/) (>= 20.0.0)
2. Install [MongoDB](https://www.mongodb.com/) or configure your preferred database.
3. Set up a Google OAuth2 application via [Google Cloud Console](https://console.cloud.google.com/).
4. Create a Twilio account and configure the messaging service.

#### **Installation**

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

#### **Run the Application**

- Development mode:
  ```bash
  pnpm dev
  ```
- Production mode:
  ```bash
  pnpm start
  ```

#### **Run Tests**

```bash
pnpm test
```

---

### **Project Structure**

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
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
├── README.md           # Documentation
```

---

### **Authentication Setup**

#### **Google Authentication**

#### **Phone Code Authentication**

---

### **Code Quality Automation**

This project uses **Husky** for Git hooks to enforce code quality ahd testing:

---

### **Configuration**

Refer to `.env.example` for the full list of required environment variables.

---

### **Contributing**

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

- **Name**: [Oliver Boucher]
- **Email**: [oliver.b25.f@gmail.com]
- **GitHub**: [Github](https://github.com/secretariatv)
- **Twitter**: [Twitter](https://x.com/ovb_corder)

Feel free to reach out for any questions or feedback about this project!
