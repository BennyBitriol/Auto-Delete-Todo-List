# Auto Delete Todo List

## Overview
The **Auto Delete Todo List** application is designed to provide a simple yet interactive experience for managing tasks. The main feature of this application is a list of clickable buttons, each representing a todo item. 

## Features
- **Clickable Buttons**: Users can interact with todo items by clicking on them.
- **Column Separation**: Each clicked button will be moved into its own column based on its type, such as "Fruit" or "Vegetable."
- **Auto-Return Mechanism**: Each button will remain in the selected column for **5 seconds** before automatically moving back to the bottom of the main list.
- **Immediate Return**: If a button is clicked in the right column (Fruit/Vegetable), it will immediately return to the bottom of the left column (list).

## How to Use
1. Click on any todo item button from the main list.
2. The button will move to the corresponding column based on its type.
3. After 5 seconds, the button will automatically return to the main list.
4. If you click on the button in the right column, it will immediately return to the bottom of the main list.

## Installation
To set up this project locally, follow these steps:

1. Clone the repository:
```bash
$ git clone <repository-url>
```

2. Navigate into the project directory:
```bash
$ cd auto-delete-todo-list
```

3. Install project
```bash
$ yarn install
```

4. Running the project
```bash
$ yarn dev
```


