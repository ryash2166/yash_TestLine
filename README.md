# yash_TestLine
# Quiz App

A **React-based Quiz Application** with interactive UI and smooth animations using **Framer Motion**. The app includes a timer, progress bar, and animated effects for both correct and incorrect answers.

## Features

 **Dynamic Questions:** Fetches quiz questions from context and displays them interactively.  
 **Timer Functionality:** A countdown timer per question (default: 10s).  
 **Progress Bar:** Visually represents quiz progress.  
 **Correct Answer Effect:**  Confetti animation when selecting the right answer.  
 **Wrong Answer Effect:**  Screen shakes briefly when selecting the wrong answer.  
 **Framer Motion Animations:** Smooth transitions for UI elements.  
 **Navigation:** Redirects to the results page after completing the quiz.  

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the application:**
   ```bash
   npm run dev
   ```
4. **Run the backend server:**
    ```bash
   node server.js
   ```


## Effects & Animations

| Effect | Description |
|--------|-------------|
|  Confetti Effect | Triggers when selecting the correct answer. |
|  Shake Effect | Briefly shakes the screen for wrong answers. |
|  Timer Animation | Counts down for each question. |
|  Progress Bar | Smoothly fills as the quiz progresses. |
|  Page Transition | Slides between questions for a seamless experience. |

## Dependencies

- **React** - UI Framework
- **Framer Motion** - Animations & Transitions
- **Confetti** - Celebration effect for correct answers
- **React Router** - Navigation between pages

## Folder Structure
```
 src/
 ├──  components/  # UI Components
 ├──  context/     # Quiz Context Provider
 ├──  pages/       # Quiz & Result Pages
 ├──  App.jsx       # Main Application
 ├──  index.jsx     # Entry Point
```

## License

This project is licensed under the **MIT License**.

---
Enjoy coding! 🚀


## UI Video

https://jam.dev/c/2dedbe60-4eac-4382-be6d-44cb15813c91
