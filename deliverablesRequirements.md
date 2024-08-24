# Deliverables Rubric

## 1 - Specification

### Prerequisites
- **GitHub Repository:** Update the `README.md` file in your startup GitHub repository to include your startup specification.
- **Submission:** Provide the URL for your GitHub startup repository to the Canvas assignment.

### Specification Requirements
- **Elevator Pitch (20%)**
  - Provide a concise and compelling elevator pitch in your `README.md` that would excite potential investors or users.

- **Key Features (10%)**
  - Describe the key features of your application in your `README.md`.

- **Technology Usage (30%)**
  - **HTML:** Basic structural and organizational elements.
  - **CSS:** Styling and animating.
  - **JavaScript:** Interactivity (e.g., button actions).
  - **React:** Components, reactivity, and routing.
  - **Web Service:** Remote functions called from your app (including at least one third-party service). Example: `saveScores`, `getWeather`, or `chatWithFriend`.
  - **Authentication:** User account creation, login, and displaying user names.
  - **Database Data:** Rendering application data stored in the database (e.g., high scores).
  - **WebSocket Data:** Display real-time data from your server (e.g., chat messages, stock prices).

- **Design Sketches (30%)**
  - Include one or more rough sketches of your application. Use tools like NinjaMock.com, Google Docs, or paper. Embed these images in your `README.md`.

### Markdown Usage
- **Proper Markdown (10%)**
  - Use Markdown effectively in your `README.md`. Refer to GitHub documentation for examples.

### Example of Representing All Technologies
- **HTML:** Two HTML pages for login and voting.
- **CSS:** Styling for different screen sizes.
- **JavaScript:** Login, choice display, voting, backend endpoint calls.
- **React:** Single page application with componentized views.
- **Service:** Endpoints for choices, votes, and third-party API (e.g., `https://dog.ceo/api/breeds/image/random`).
- **DB/Login:** Store users, choices, and votes; secure credentials; restrict voting to authenticated users.
- **WebSocket:** Broadcast votes in real-time.

---

Make sure to push your updated `README.md` file to GitHub for review.

## 2 - HTML

### Prerequisites
- **GitHub Repository:** Use the same startup GitHub repository created for the specification deliverable.
- **Deployment:** Ensure that the HTML pages are deployed to your production environment.
- **Submission:** Provide the URL for your GitHub startup repository to the Canvas assignment.

### Assignment Requirements
- **HTML Pages (20%)**
  - Create HTML pages for each main component of your application.
  - Ensure that your main HTML file is named `index.html` so it loads by default.

- **Proper Use of HTML Tags (10%)**
  - Utilize appropriate HTML tags, including `<body>`, `<nav>`, `<main>`, `<header>`, and `<footer>`.

- **Links Between Pages (10%)**
  - Implement links between HTML pages as necessary.

- **Application Textual Content (10%)**
  - Include textual content that represents what your application will eventually display.

- **Placeholder for 3rd Party Service Calls (10%)**
  - Include placeholders for integration with at least one third-party service API.

- **Application Images (10%)**
  - Add placeholder images that will be used in your application.

- **Login Placeholder (10%)**
  - Provide a placeholder for user login functionality, including space to display the user’s name after login.

- **Database Data Placeholder (10%)**
  - Include a placeholder for displaying data that will be stored in the database.

- **WebSocket Data Placeholder (10%)**
  - Add a placeholder for displaying real-time data received via WebSocket communication.

### Markdown Usage
- **Notes.md Updates (10%)**
  - Periodically update your `notes.md` file to document your learning and progress. Ensure enough Git commits to demonstrate ownership of your code.

### Deployment
- **Deployment Script (10%)**
  - Use the `deployFiles.sh` script from the Simon HTML repository to deploy your HTML pages. Ensure the application is available at `https://startup.yourdomainname`.

### Example Layout
- **HTML Structure:** Reflects the intended layout of your application, including all necessary placeholders and structural elements.

### Debugging and Testing
- **VS Code Live Server:** Use the VS Code Live Server extension to view your HTML in the browser.
- **Browser Debugging:** Utilize the browser’s developer tools to examine HTML loading and structure.

---

Make sure to push your final HTML code to GitHub and deploy it to your production environment. Celebrate your milestone with some soft serve ice cream! 🍦

## 3 - CSS

### Prerequisites
- **GitHub Repository:** Use the same startup GitHub repository.
- **Deployment:** Ensure CSS is deployed to your production environment.
- **Submission:** Provide the URL for your GitHub repository to Canvas.

### Assignment Requirements
- **Header, Footer, and Main Content (30%)**
  - Style the header, footer, and main content body.

- **Navigation Elements (20%)**
  - Style navigation menus and links.

- **Responsive Design (10%)**
  - Ensure layout and styling adapt to different screen sizes.

- **Application Elements (20%)**
  - Style buttons, forms, and other elements.

- **Application Text Content (10%)**
  - Style text for readability and design consistency.

- **Application Images (10%)**
  - Style images to fit the design layout.

### Markdown Usage
- **Notes.md Updates (10%)**
  - Document learning and progress. Ensure adequate Git commits.

### Deployment
- **Deployment Script (10%)**
  - Use `deployFiles.sh` to deploy CSS. Ensure availability at `https://startup.yourdomainname`.

### Debugging
- **VS Code Live Server:** View and test the styled application.
- **Browser Tools:** Use developer tools to debug CSS.

---

Push final CSS to GitHub and deploy it to production. Ensure application is accessible from your production environment.

## 4 - React

### Prerequisites
- **GitHub Repository:** Use the same startup GitHub repository.
- **Deployment:** Ensure React application is deployed to your production environment.
- **Submission:** Provide the URL for your GitHub repository to Canvas.

### Assignment Requirements
- **Bundled with Vite (10%)**
  - Application must be bundled using Vite.

- **React Components (50%)**
  - Create multiple React components that implement or mock all application functionality.

- **React Router (20%)**
  - Implement React Router to handle navigation between components.

- **React Hooks (20%)**
  - Use React Hooks where appropriate for state management and side effects.

### Markdown Usage
- **Notes.md Updates (10%)**
  - Document learning and progress. Ensure adequate Git commits.

### Deployment
- **Deployment Script (10%)**
  - Replace the previous deployment script with `deployReact.sh`. Ensure availability at `https://startup.yourdomainname`.

### Debugging
- **Browser Tools:** Use developer tools to debug React components and JavaScript.
- **VS Code Debugger:** Debug backend JavaScript if needed.

---

Push final React code to GitHub and deploy it to production. Ensure the application is accessible from your production environment.

## 5 - Web Service

### Prerequisites
- **Simon Service Deployed:** Must be deployed to your production environment.
- **GitHub Link:** Display a link to your GitHub repository on your application's home page.
- **Notes in README.md:** Document modifications and additions in your repository's `README.md` file.
- **Git Commits:** Enough commits to prove ownership (usually dozens across multiple days).

### Backend Web Service Support
- **Create HTTP Service (40%)**
  - Implement an HTTP service using Node.js and Express.

- **Frontend Served via Express (10%)**
  - Serve your frontend code using Express static middleware.

- **Frontend Calls Third-Party Endpoints (10%)**
  - Ensure your frontend calls third-party service endpoints.

- **Backend Service Endpoints (20%)**
  - Provide service endpoints from your backend.

- **Frontend Calls Service Endpoints (20%)**
  - Ensure your frontend interacts with your service endpoints.

### Deployment
- **Deploy Application:** Ensure your application is deployed to your production environment and accessible from `https://startup.yourdomainname`.

- **Submit URL:** Upload the URL to your startup application to the Canvas assignment.

## 6 - Authentication

### Prerequisites
- **GitHub Repository:** Use the same startup GitHub repository.
- **Deployment:** Ensure application is deployed to your production environment with your `dbConfig.json` credentials.
- **Submission:** Provide the URL for your GitHub repository to Canvas.

### Assignment Requirements
- **Database Connection & CRUD Operations (20%)**
  - Connect to MongoDB.
  - Provide endpoints for adding, updating, and deleting data.
  - Persist data and retrieve it from MongoDB.

- **User Authentication & Authorization (40%)**
  - Register new users.
  - Authenticate existing users and allow logout.
  - Store and retrieve encrypted credentials.
  - Restrict functionality based on user authentication.

- **Frontend Integration (20%)**
  - Display user data in the frontend.
  - Handle user account creation, login, and logout in the frontend.

### Markdown Usage
- **Notes.md Updates (10%)**
  - Document your learning and progress. Ensure adequate Git commits.

### Debugging
- **Browser Tools:** Use developer tools for frontend debugging.
- **VS Code Debugger:** Debug backend JavaScript using Node.js debugger.

### Deployment
- **Deployment Script (10%)**
  - Use `deployService.sh` to deploy your application. Ensure availability at `https://startup.yourdomainname`.

### Additional Notes
- Periodically commit and push code to GitHub.
- Update `notes.md` with your progress and findings.

Push final code to GitHub and deploy it to production. Ensure the application is accessible from your production environment.





## 7 - Web Socket

### Prerequisites
- **GitHub Repository:** Use the same startup GitHub repository.
- **Deployment:** Ensure application is deployed to your production environment.
- **Submission:** Provide the URL for your GitHub repository to Canvas.

### Assignment Requirements
- **Backend WebSocket Support (20%)**
  - Implement WebSocket server to listen for connections.

- **Frontend WebSocket Support (20%)**
  - Connect to WebSocket from the frontend.

- **Data Transmission (30%)**
  - Send messages over the WebSocket connection.

- **Application Integration (30%)**
  - Display WebSocket data in the application interface.

### Markdown Usage
- **Notes.md Updates (10%)**
  - Document your progress and learning. Ensure adequate Git commits.

### Debugging
- **Browser Tools:** Use developer tools for frontend debugging.
- **VS Code Debugger:** Debug backend WebSocket JavaScript using Node.js debugger.

### Deployment
- **Deployment Script (10%)**
  - Use `deployService.sh` to deploy your application. Ensure availability at `https://startup.yourdomainname`.

### Additional Notes
- Periodically commit and push code to GitHub.
- Update `notes.md` with your progress and findings.

Push final code to GitHub and deploy it to production. Ensure the application is accessible from your production environment.