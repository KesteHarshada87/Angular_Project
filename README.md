# 🎡 Random Name Picker 

A simple beginner-friendly Angular web application that allows users to add names and randomly pick a winner by clicking a **SPIN** button.

This project was created to learn and practice Angular basics such as components, data binding, directives, and event handling.

---

## 🚀 Features

• Add names to a list  
• Display names dynamically  
• Randomly select a winner  
• Clean and simple user interface  
• Beginner friendly Angular code  

---

## 🛠️ Technologies Used

- Angular (Standalone Components)
- TypeScript
- HTML
- CSS

---

## 📂 Project Structure

random-name-picker/
│
├── src/
│   ├── app/
│   │   ├── app.ts        → Main component logic
│   │   ├── app.html      → UI template
│   │   ├── app.css       → Component styles
│   │
│   ├── main.ts           → Application bootstrap file
│   ├── styles.css        → Global styles
│
├── package.json
├── angular.json
└── README.md

---

## ▶️ How to Run the Project

### Step 1: Install Angular CLI (if not installed)

npm install -g @angular/cli

### Step 2: Open Project Folder

cd random-name-picker

### Step 3: Install Dependencies

npm install

### Step 4: Run the Application

ng serve

### Step 5: Open in Browser

http://localhost:4200

---

## 🧠 How the Application Works

1. User enters a name in the input box.
2. When the **Add** button is clicked, the name is stored in an array.
3. Angular automatically displays the list using *ngFor directive.
4. When the **SPIN** button is clicked:
   - The app generates a random number using Math.random().
   - That number is used as an index.
   - The name at that index becomes the winner.
5. The winner is displayed on the screen.

---

## 📘 Angular Concepts Used

- Standalone Components
- Two-way Data Binding (ngModel)
- Event Binding (click)
- Structural Directives (*ngFor, *ngIf)
- Arrays and Functions in TypeScript

---

## 🎯 Learning Purpose

This project was built as a beginner Angular project to understand:
- How Angular components work
- How to bind data between UI and logic
- How to handle user events
- How to create simple interactive web apps

---

## 🔮 Future Improvements (Optional)

- Add delete name button
- Add spinning animation
- Save names in local storage
- Add colorful UI design

---

## 👩‍💻 Author

Harshada Keste
