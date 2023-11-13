

# Social Network API

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [APIRoutes](#API-Routes)
- [Demo](#demo)



## Description

This is a NoSQL-based API for a social network, designed to handle large amounts of unstructured data. The application uses MongoDB as its database, and the server is built using Node.js with Express. It includes routes for users, and thoughts.
## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd social-network-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:

     ```env
     MONGODB_URI=your-mongodb-uri
     PORT=3000
     ```

     Replace `your-mongodb-uri` with your MongoDB connection URI.

5. Start the server:

   ```bash
   npm start
   ```

6. Open [Insomnia](https://insomnia.rest/) or your preferred API testing tool to test the API routes.

## API Routes

### Users

#### Get Users

- Endpoint: `GET /users`
- Description: Retrieve a list of all users.
- Response: JSON representation of user data.

#### Get User by ID

- Endpoint: `GET /users/:id`
- Description: Retrieve a specific user by ID.
- Response: JSON representation of the user.

#### Create User

- Endpoint: `POST /users`
- Description: Create a new user.
- Request Body: JSON representation of user data.
- Response: JSON representation of the created user.

#### Update User

- Endpoint: `PUT /users/:id`
- Description: Update an existing user.
- Request Body: JSON representation of updated user data.
- Response: JSON representation of the updated user.

#### Delete User

- Endpoint: `DELETE /users/:id`
- Description: Delete a user by ID.
- Response: JSON indicating the success of the operation.

### Thoughts

[... Repeat the above pattern for Thoughts routes ...]


## Demo

https://drive.google.com/file/d/15LWlRjK_ZQ7vOYCQ02FBcCpGH5ecBDlD/view

---

