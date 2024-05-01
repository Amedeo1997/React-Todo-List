# React Todo List

This React application is a comprehensive productivity tool that includes a Todo List, Shopping List, and Appointments scheduler. Each module is designed to help organize tasks, shopping items, and appointments efficiently. The project is live and can be viewed [here](https://masha-to-do-list.netlify.app/).

## Features

### Todo List
- **Add Tasks**: Users can add tasks to their list.
- **Edit Tasks**: Tasks can be edited inline, allowing for quick updates.
- **Complete Tasks**: Users can mark tasks as completed, which will cross the task out visually.
- **Delete Tasks**: Tasks can be removed from the list.
- **Persistence**: Tasks are saved in the browser's localStorage, ensuring they are not lost on page reload.

### Shopping List
- **Add Shopping Items**: Users can add items to their shopping list along with the quantity needed.
- **Edit Shopping Items**: Items can be edited directly in the list.
- **Mark as Purchased**: Users can check off items they have purchased.
- **Delete Items**: Items can be removed from the shopping list.
- **Persistence**: Shopping list items are saved in localStorage.

### Appointments
- **Add Appointments**: Users can schedule appointments with a date, time, and description.
- **Edit Appointments**: Appointments can be edited.
- **Delete Appointments**: Unneeded appointments can be removed.
- **Sorting and Grouping**: Appointments are grouped by date and sorted by time within each group.
- **Persistence**: Appointments are stored in localStorage.

### General
- **Loading Screen**: A loading screen is displayed on initial load, simulating a loading phase.
- **Responsive Navigation**: The application uses React Router for navigating between the different functionalities, with clear icons for each section.

## Technologies
- **React**: Utilizes functional components with hooks for state management and effects.
- **Local Storage**: Uses localStorage to persist data across sessions.
- **React Router**: For seamless navigation between different sections of the application.
- **Custom CSS**: Styling is achieved using separate CSS files for each component, ensuring modularity and ease of changes.

## Setup
To run this project locally, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/React-Todo-List.git
cd React-Todo-List
npm install
npm start

