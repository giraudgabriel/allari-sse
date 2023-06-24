# Allari 

># Final Version: (2.0.0)

> ## Frontend:
- A web app with header, navigation, content and footer
- Integration with Backend API
- List images from API
- Improve Frontend style css/js
- Add content main text of project description
- Unit test

  > ## How To Run
    ```cmd
      cd frontend

      yarn

      yarn dev
    ```

  >## Tests

  ```cmd
    yarn test

    yarn coverage
  ```

  > ## Backend:
  - NET. API
  - Tests
  - Reading data from MongoDB Atlas Db
  - Dependency Injection
  - Unit test


  >## How to Run
    ```cmd
      cd backend

      dotnet restore

      dotnet build

      cd WebApi

      dotnet run

    ```

  >## Tests
    ```cmd
      cd backend

      dotnet test
    ```

> ## Env - Considerations

  - I have used MongoDB Atlas Db to store the images data, so you don't need to install any database to run the project.
  - If you want to use a local database, you can change the connection string in the appsettings.json file.
  - I have used the .NET Core 6 version to develop the backend API.

> ## Project Structure
  
    - The project is divided into two folders, frontend and backend.
    - The frontend folder contains the web application developed in React.js.
    - The backend folder contains the API developed in .NET Core 6.


> # Final Considerations
- I didn't developed a pretty frontend (with a better UX/UI), because I focused on the code quality (backend and frontend) and the tests.
- I've tried to follow the PDF instructions, most of the time.

># Project Demo

![Allari](allari-web.gif)