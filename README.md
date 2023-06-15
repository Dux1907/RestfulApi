<!DOCTYPE html>
<html>
<head>
  <title>RESTful API Documentation</title>
</head>
<body>
  <h1>RESTful API Documentation</h1>
  
  <h2>API Endpoints</h2>
  <ul>
    <li>GET /api/users: Retrieves a list of all users.</li>
    <li>GET /api/users/{id}: Retrieves a specific user by their ID.</li>
    <li>POST /api/users: Creates a new user.</li>
    <li>PUT /api/users/{id}: Updates an existing user.</li>
    <li>DELETE /api/users/{id}: Deletes a user.</li>
  </ul>
  
  <h2>Request and Response Formats</h2>
  
  <h3>Request Format</h3>
  <pre>
    <code>
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}
    </code>
  </pre>
  
  <h3>Response Format</h3>
  <pre>
    <code>
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}
    </code>
  </pre>
  
  <h2>Authentication</h2>
  <p>
    This API requires authentication for certain operations. The authentication mechanism used is JSON Web Tokens (JWT). To authenticate a request, include the JWT token in the <code>Authorization</code> header of the request.
  </p>
  <pre>
    <code>
Authorization: Bearer &lt;token&gt;
    </code>
  </pre>
  
  <h2>Error Handling</h2>
  <p>
    If an error occurs while processing a request, the API will respond with an appropriate HTTP status code and an error message in the response body. The response format for errors is as follows:
  </p>
  <pre>
    <code>
{
 
