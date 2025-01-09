# Event Planner

Event Planner is a React-based web application designed to help users efficiently organize and manage their tasks and events. It features drag-and-drop functionality for rearranging tasks, searching by title, task management across different dates, and displaying public holidays.

## Live Demo

Check out the live version of the application here: [Event Planner on Vercel](https://event-planner-git-main-sergey-ryabko-84s-projects.vercel.app/)

## Repository

The source code is available on GitHub: [Event Planner Repository](https://github.com/Sergey-Ryabko-84/event-planner)

## Features

- **Task Management**: Add, update, delete, and view tasks.
- **Drag-and-Drop**: Reorder tasks within the same day or move tasks between different days.
- **Search Functionality**: Search for tasks by title.
- **Local Storage**: Tasks are saved locally to persist data between sessions.
- **Dynamic Task Sorting**: Tasks are automatically sorted based on their order within the same day.
- **Holiday Display**: Public holidays are shown to provide better task planning.

## Technology Stack

- **Frontend**: React, TypeScript
- **State Management**: React Context API
- **Date Manipulation**: Day.js
- **Drag-and-Drop**: React DnD
- **Deployment**: Vercel

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Sergey-Ryabko-84/event-planner.git
   ```

2. Navigate to the project directory:

   ```bash
   cd event-planner
   ```

3. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. **Adding Tasks**:
   - Click the "Add Task" button and fill in the task details.
2. **Reordering Tasks**:
   - Drag and drop tasks to reorder them within the same day or move them to another day.
3. **Searching Tasks**:
   - Use the search bar to filter tasks by title.
4. **Deleting Tasks**:
   - Click the delete icon next to a task to remove it.

## Folder Structure

```
├── public          # Static files
├── src
│   ├── common      # Shared components, types and utilities
│   ├── api         # API-related functions
│   ├── components  # Reusable components (e.g., Calendar, TaskForm)
│   └── styles      # Global and component-specific styles
├── README.md       # Project documentation
└── package.json    # Project dependencies and scripts
```

## Future Enhancements

- **Backend Integration**: Add a backend for user authentication and cloud data storage.
- **Recurring Tasks**: Support for recurring tasks and reminders.
- **Mobile Responsiveness**: Improve UI for smaller screens.

---

Thank you for checking out Event Planner! If you encounter any issues or have feature suggestions, feel free to open an issue in the repository.
