# Assignment
Assignment | CRUD API | Baxture 

## File Structure (Example)

project-root
  src
    controllers
      usersController.js
    routes
      usersRoutes.js
    server.js
.env
package.json
...

# CRUD Operations Example

In this section, we'll walk through examples of CRUD operations using the API endpoints.

Assuming the base URL for the API is `http://localhost:4000/api/users`.

## 1. Create a New User (POST)
`curl -X POST -H "Content-Type: application/json" -d '{"username":"John Doe","age":25,"hobbies":["Reading","Gaming"]}' http://localhost:4000/api/users`

## 2. Get All Users (GET Request):
`curl http://localhost:4000/api/users`

## 3. Get a Specific User (GET Request):
Replace {userId} with the actual ID of a user you created in the previous step. Run the following cURL command:
`curl http://localhost:4000/api/users/{userId}`

## 4. Update a User (PUT Request):
Replace {userId} with the actual ID of a user you created in the first step. Run the following cURL command to update the user:
`curl -X PUT -H "Content-Type: application/json" -d '{"username":"Updated Name","age":30,"hobbies":["New Hobby"]}' http://localhost:4000/api/users/{userId}`

## 5. Delete a User (DELETE Request):
Replace {userId} with the actual ID of a user you created in the first step. Run the following cURL command to delete the user:
`curl -X DELETE http://localhost:4000/api/users/{userId}`
This command sends a DELETE request to delete the specified user.

## Remember to replace {userId} with the actual ID of a user you created. You should see responses from the server for each request.


