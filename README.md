# Weekly Planner: CS 260 Project

<p align="center">
  <a href="notes.md"><strong>My Notes</strong></a> ·
  <a href="#specification-deliverable"><strong>Specification Deliverable</strong></a> ·
</p>
<br/>

## Specification Deliverable

#### Elevator Pitch

What is the hardest thing about organizing your life? Its keeping your plans, goals, and vision organized in one place. It's never convenient/effective keeping your notes in separate notebooks, calendars, and folders, and if youre trying to do it digitally then you have to make your plans using multiple applications. This Weekly Planning brings everything together in one simple app, that even allows you to collaborate on your plans with others, using a chat feature and interactive components to help you keep track of your vision.

#### Design

<div style="display: flex; align-items: center;">
    <label for="loginPage" style="margin-right: 10px;">Login Page</label>
    <img id="loginPage" src="./assets/loginPage.png" style="height: 200px; margin-right: 10px;" />
    <label for="planningPage" style="margin-right: 10px;">Planning Page</label>
    <img id="planningPage" src="./assets/planningBoard.png" style="height: 200px;" />
</div>

#### Key Features

#### Technologies

***HTML*** - Main landing page with motivating quotes, authentication page for signin, signup, and main planning dashboard for authenticated user. HTML elements include dynamic lists where users can see goals, personal roles, and checklist Items for various different categories in their weekly planning.

***CSS*** - Finished app will have CSS modules for each component and a global module for the whole app's theme.

***JavaScript*** - App and Authentication contexts, react logic for each component.

***Service*** - Endpoints for calling db (ie. insert, update, and delete calls), and authentication functions.

***DB/Login*** - Using auth (users table), db Tables (goals and plans for planning board), and chat history.

***WebSocket*** - Chat feature where you can plan with other users real time. Keeps planning info in one place, rather than having to look through texts.

***React*** - List component for displaying db info, input component to dynamically send info to the db, chat component, main page component, login component, home component with quotes.