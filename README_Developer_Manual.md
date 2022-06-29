
# The Error Oracle

This is an app that was built to help bootcampers to quickly find answers to error messages they encounter when coding.


## How this app works
![front_and_back_and_PostGres_diagram](https://user-images.githubusercontent.com/74318481/176458301-6b64db19-f784-49dc-8679-75c435e67121.jpg)



When working with this app in the development environment, the frontend is run using localhost server 3000 and backend localhost 3001. 

Looking at the above diagram, the frontend makes async function calls to the backend server for data. 
The backend then calls PostGreSQL database to fetch the data requested by the client
and serves it back to the frontend.

For more information about how the BackEnd works check out this documentation:
https://github.com/SchoolOfCode/w9_backend-project-codebusters/blob/main/README.md

## Frontend Component Tree
![Correct component tree](https://user-images.githubusercontent.com/74318481/176460814-2804eee7-670d-42e8-a316-f5c749b8dfda.jpg)


## Components in the FrontEnd 
The current component tree is as per the above diagram. You will see a parent component folder: App and child components folders: Button, Input and ToggleMode.
The Button component relates to the three error message  buttons on the UI.
The Input component relates to the search bar.
The ToggleMode component relates to the dark/light mode.


## To run the app in development

To run the app, you will need to clone down the frontend and backend repositories:

[FrontEnd] (https://github.com/SchoolOfCode/w9_frontend-project-codebusters)

[BackEnd] (https://github.com/SchoolOfCode/w9_frontend-project-codebusters)

For more information on the backend repo, please refer to https://github.com/SchoolOfCode/w9_backend-project-codebusters/blob/main/README.md as we are dealing with the frontend repo in this part of documentation.

Once the FrontEnd repo is cloned down, install node package manager:-

```bash
  npm i
```

This will ensure you have all the packages you will need to start running the app. 



