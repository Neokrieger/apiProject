# apiProject

Basic api which is able to receive GET, POST, PUT, DELETE requests 
and perform them on an in memory database. Response data is in JSON format

To run the app:

```
1 - clone this repository
2 - 'npm install' from within project folder
3 - 'node app.js' to run api
```

To run tests:

```
Cypress - once project is set up, use the 'npx cypress open' command
and select the spec file
Jasmine - once project is set up, use the 'npm test' command
```

Front end which interacts with the app:


```
https://github.com/Neokrieger/reactProject
```

Tools used & thought process:

```
Git Bash - I used git bash in order to navigate and edit my folder structure 
as well as interact with github and run commands.
```
```
Github - Used for version control
```
```
Node.js - Used as the programming language for the project
```
```
Express.js - Back end framework i used to build and structure the api
```
```
CORS node.js - Middleware package which allows the project the be accessible from outside
its domain through requests
```
```
LokiJS - I have not previously used an in memory database library before so the process
of setting up loki took a little extra research on how to go about it. 
```
```
Cypress - Testing framework used to simulate requests to the api, verify responses and check how the database changed.
```
```
Jasmine - Testing framework i intended to use initially but I had issues accessing the database from within it which
made it difficult to verify results.
```
