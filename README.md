### How to run the code

1. Clone the repository
2. Open the terminal and navigate to the project folder
3. Npm install
4. Change your database connection string in the app-data-source.ts file
5. node tsc to compile the typescript files
6. node dist/index.js
7. get api http://localhost:3000/v1/user to get all users
8. post api http://localhost:3000/v1/user to create a user with the following body
```json
{
    "firstName": "John Doe",
    "lastName": "13",
}

