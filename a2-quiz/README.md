# A2 Quiz

![image of the website](src/img/Screenshot.png)

## solution

I divided the code into classes, and each class is responsible for specific things. For example, the 'Player' class is responsible for handling the player only, and 'HtmlController' is responsible for controlling the HTML elements according to the needs of the quiz. The 'Quiz' class is the main class for the quiz, css file is used to style the website.


It is the first time for me using JavaScript, and it was a very interesting introduction to JavaScript.

## Installing 

Certainly, here's a rewritten version as points:

1. Begin by cloning the repository onto your computer.
2. Launch the terminal and use the "cd" command to enter the repository's directory.
3. In the project's main directory, run "npm install" to retrieve all required project dependencies.
4. Initiate the application build with "npm run build" for compiling necessary assets using Vite.
5. Proceed to launch the application by typing "npm run serve" in the terminal.
6. Navigate to "http://localhost:4173/" in your web browser to view the quiz.
7. Get started with the quiz and enjoy exploring the application! Follow these steps for a smooth setup of my code.


## Rulels 

After navigating to the web server, you need to enter your name or nickname and then click 'Enter' or click on the 'Start the Game' button. Then, you need to answer the questions within the time frame shown by the timer. You can press 'Enter' or click on the button to submit your answers. Some questions have alternatives from which you need to choose the correct one. In case of winning or losing, you have two options: viewing the top 5 scores or restarting the game. If you choose to restart the game, you will need to enter your name again.


## linters 

1. Utilize various linters during the development process to ensure code quality.
2. Run "npm run stylelint" to identify and report any style sheet issues. Execute "npm run stylelint:fix" to attempt automatic corrections.
3. Employ "npm run htmlhint" to scan and report any issues within HTML files.
4. Utilize "npm run eslint" for analyzing and reporting on JavaScript file inconsistencies. Use "npm run eslint:fix" for automatic problem resolution attempts.
5. Execute "npm run lint" to concurrently run all available linters for comprehensive code checks.
6. Generate code documentation by executing "npm run jsdoc", which organizes and provides details about your code's structure and components.