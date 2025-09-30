# Advanced Behavioral Exam Simulator

An interactive, modern, and comprehensive mock exam simulator built with vanilla JavaScript, HTML5, and CSS3. This tool is specifically designed for students and professionals in the fields of Applied Behavior Analysis (ABA) and Autism Spectrum Disorder (ASD) to test their knowledge and prepare for certification exams.

**[➡️ View Live Demo](https://practiceyourtest.github.io/behavioral-exam-simulator/)** *(Replace with your actual GitHub Pages link after deploying!)*

---

## ✨ Key Features

This project was built to be a full-featured study tool. It includes:

*   **Dynamic Quiz Categories:** A clean start screen allows users to choose from multiple specialized topics within the behavioral science field.
*   **Comprehensive Question Bank:** Features 40 high-quality, detailed questions across 4 categories, each with clear explanations for the correct answer.
*   **Interactive Quiz Interface:** A sleek and intuitive UI that provides immediate visual feedback for correct and incorrect answers.
*   **Full Navigational Control:** Users can freely move between questions using **Next** and **Previous** buttons to review or change answers before final submission.
*   **Countdown Timer & Progress Bar:** A visual timer creates a realistic exam environment, while the progress bar shows the user's completion status at a glance.
*   **Instant Scoring & Results:** Upon finishing, the user receives an immediate percentage score and a clear "Pass" or "Fail" status.
*   **Detailed Answer Review:** The results screen provides a comprehensive review of every question, showing the user's answer, the correct answer, and a detailed explanation.
*   **Persistent High Score Tracking:** The application uses browser `localStorage` to save and display the user's high score for each category, encouraging repeat practice.
*   **Fully Responsive Design:** The interface is optimized for a seamless experience on all devices, from large desktop monitors to mobile phones.
*   **Resource-Rich Homepage:** The landing page provides context, encouragement, and links to official, authoritative resources for further study.

---

## 🛠️ Tech Stack

This project is built with foundational web technologies, demonstrating mastery of the core components of front-end development. No frameworks were used.

*   **HTML5:** Structured with semantic HTML for accessibility and clarity.
*   **CSS3:** Styled with modern CSS, including Flexbox, Grid, custom properties, and media queries for a responsive layout.
*   **JavaScript (ES6):** All logic and interactivity, including DOM manipulation, state management, and interaction with `localStorage`, are handled with vanilla JavaScript.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser (like Chrome, Firefox, or Edge).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/practiceyourtest/behavioral-exam-simulator.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd behavioral-exam-simulator
    ```
3.  **Open `index.html` in your browser:**
    Simply double-click the `index.html` file, or right-click and choose "Open with" your preferred browser.

---

## 🕹️ How to Use

1.  **Open the application:** You will be greeted by the home screen.
2.  **Read the introduction:** Get acquainted with the tool and find useful links to official resources.
3.  **Choose a Category:** Select one of the four categories (e.g., "ABA Principles") to start the exam.
4.  **Answer the Questions:** The quiz will begin. Read each question and select the best answer. The timer will start counting down.
5.  **Navigate:** Use the "Next" and "Previous" buttons to move through the questions.
6.  **Finish the Exam:** Once you reach the last question, the "Next" button will be replaced by a "Finish Exam" button. Click it to submit your answers.
7.  **Review Your Results:** The results screen will display your score, high score, and pass/fail status. Scroll down to see a detailed review of each question and its explanation.
8.  **Try Again:** You can choose to retake the same category or return to the homepage to select a different one.

---

## 🔧 Customization: Adding More Questions

The question bank is designed to be easily expandable.

1.  Open the `script.js` file.
2.  Locate the `quizDatabase` constant.
3.  To add a new question to an existing category, simply add a new object to that category's array, following the existing structure:
    ```javascript
    {
      question: "Your new question text here?",
      answers: [
        { text: "Option A.", correct: false },
        { text: "Option B.", correct: true }, // Mark the correct answer
        { text: "Option C.", correct: false },
        { text: "Option D.", correct: false }
      ],
      explanation: "A detailed explanation of why Option B is correct."
    }
    ```
4.  To add a new category, add a new key to the `quizDatabase` object and an array of question objects as its value. The homepage will automatically update to show the new category button.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
