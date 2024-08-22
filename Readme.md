

# CRUD Operations with Users and Items

This project implements CRUD (Create, Read, Update, Delete) operations for managing users and items using Node.js, Express, and MongoDB. Each user can post multiple items, and each item is associated with the user who posted it.

## Features

- **User Registration**: Register new users with unique credentials.
- **CRUD Operations for Users**:
  - **Create**: Register a new user.
  - **Read**: Retrieve user information by ID.
  - **Update**: Modify existing user information.
  - **Delete**: Remove a user from the database.
- **CRUD Operations for Items**:
  - **Create**: Post a new item associated with a user.
  - **Read**: Retrieve items by ID, or get all items.
  - **Update**: Modify an existing item.
  - **Delete**: Remove an item from the database.
- **Get Items by User**: Retrieve all items posted by a specific user.

## Project Structure

```
/project-root
│
├── /controllers
│   ├── userController.js
│   ├── itemController.js
│
├── /models
│   ├── User.js
│   ├── Item.js
│
├── /routes
│   ├── userRoutes.js
│   ├── itemRoutes.js
│
├── /config
│   └── database.js
│
├── .env
├── server.js
└── package.json
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd project-root
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```bash
   MONGO_URI=<your-mongodb-connection-string>
   ```
5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### User Routes

- **POST /api/users/register** - Register a new user.
  ```json
  Request Body:
  {
    "username": "exampleuser",
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **GET /api/users/:id** - Get user details by user ID.
  
- **PUT /api/users/:id** - Update user information by user ID.
  ```json
  Request Body:
  {
    "username": "newusername"
  }
  ```

- **DELETE /api/users/:id** - Delete a user by ID.

### Item Routes

- **POST /api/items** - Post a new item associated with a user.
  ```json
  Request Body:
  {
    "userId": "user_id_here",
    "title": "Item Title",
    "description": "Item Description"
  }
  ```

- **GET /api/items** - Get all items.
  
- **GET /api/items/:id** - Get an item by item ID.
  
- **GET /api/items/user/:userId** - Get all items posted by a specific user.
  
- **PUT /api/items/:id** - Update an item by item ID.
  ```json
  Request Body:
  {
    "title": "Updated Title"
  }
  ```

- **DELETE /api/items/:id** - Delete an item by ID.

## Usage

- Register a new user using the `/api/users/register` endpoint.
- Perform CRUD operations on users and items using the provided API endpoints.

## Dependencies

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv** for managing environment variables

