Introduction

This project is a to-do list application built with React. It allows users to log in and add, edit, and delete tasks, as well as filter them by priority and due date. The application is designed to be easy to use and customizable.


Prequisites

1. Download node.js to run the app
https://nodejs.org/en
2. Download Cypress to run the tests
https://docs.cypress.io/guides/getting-started/installing-cypress
3. Download the zip file for Todolist and copy the main folder to your preferred location.
https://github.com/Dianataal/todolist
* 4. Download VS Code if you don't have an IDE
https://code.visualstudio.com/download


Node.js download
 
* Go to the link and click download. You can choose the latest version.
* Tick necessary boxes and install it into your device.

Cypress download

* Create a folder in your preferred location where you want to install Cypress.
* Open the Terminal/Command Prompt in your computer. (Use your computer's search function)
* Write in Terminal 'cd /your/project/path' eg. my folder's location 'cd /Users/taaldiana/todolist'. (PS! add 'cd' in the beginning - it's the command that takes you into the folder) If it works, you'll see it in the Terminal.
* Write 'npm install cypress --save-dev' in the Terminal. Cypress will now install.
* If it finishes, a window will pop up. Congratulations! You now have Cypress!
To reopen cypress write 'npx cypress open' in your Terminal.


Running the to-do list app 

* Open the folder of the project in VS Code or your preferred IDE.
* Open the terminal and write 'npm install' to install the necessary dependencies needed to run the app.
* Once the installation is complete, you can write 'npm start' in the terminal to start the development server.
* If your browser didn't open, go to Google Chrome, Edge or any other browser and write 'http://localhost:3000/' into the bar


OLD VER(check next part) Running tests with Cypress

* Keep the app running on http://localhost:3000/ (write 'npm start' in your IDE's terminal if it closed)
* Write in your Computer's Terminal 'npx cypress open'. A window will soon open.
* Click on 'E2E Testing' to test the whole application.


IMPORVED: Opening Cypress through your IDE

* Go into the package.json file of your React app
* Find the "script" section
* Add "cypress:open": "cypress open" (Don't forget to add a comma to the previous line and save)
* Write 'npm run cypress:open' in your IDE's terminal.


Running your Cypress test

* Choose the browser you want to run the test in.
* Choose 'Create New Empty Spec' and click 'Create Spec'.
* Note! Here you would write your own test but let's open the one attached to the todolist app and run spec.cy.js.
* If the test is successful the app is working.