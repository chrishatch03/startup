# Startup: CS 260 Project

<p align="center">
  <a href="notes.md"><strong>My Notes</strong></a> ·
  <a href="#startup-specifications"><strong>Startup Specifications</strong></a> ·
</p>
<br/>

## Startup Specifications

***HTML*** - Main landing page with motivating quotes, authentication page for signin, signup, and main planning dashboard for authenticated user. HTML elements include dynamic lists where users can see goals, personal roles, and checklist Items for various different categories in their weekly planning.

***CSS*** - Finished app will have CSS modules for each component and a global module for the whole app's theme.

***JavaScript*** - App and Authentication contexts, react logic for each component.

***Service*** - Endpoints for calling db (ie. insert, update, and delete calls), and authentication functions.

***DB/Login*** - Using auth (users table), db Tables (goals and plans for planning board), and chat history.

***WebSocket*** - Chat feature where you can plan with other users real time. Keeps planning info in one place, rather than having to look through texts.

***React*** - List component for displaying db info, input component to dynamically send info to the db, chat component, main page component, login component, home component with quotes.