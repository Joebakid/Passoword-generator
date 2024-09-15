# Password Generator

## Description

This is a simple password generator built using React. It allows users to generate secure passwords by customizing the length and including various character sets, such as lowercase letters, uppercase letters, numbers, and symbols.

## Features

- **Customizable Length**: Choose how long your password should be.
- **Include Numbers**: Option to add numbers (`0-9`) to the password.
- **Include Symbols**: Option to add special characters like `!@#$%^&*()`.
- **Include Uppercase Letters**: Option to include uppercase letters (`A-Z`).
- **Instant Password Generation**: Generate the password with a single click.

## Technologies Used

- **React**: The UI is built using React, a JavaScript library for building interactive user interfaces.
- **CSS**: Basic styling for the app.
- **JavaScript (ES6)**: Logic for password generation is implemented using modern JavaScript features.

## How to Run the Project

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Joebakid/Passoword-generator
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Run the Project**:
   Start the development server:
   ```bash
   npm start
   ```
   This will launch the password generator in your browser at `http://localhost:3000`.

## How It Works

- The user can adjust the password length by entering the desired number in the input field.
- By checking or unchecking the checkboxes, the user can choose to include/exclude:
  - Numbers
  - Symbols
  - Uppercase Letters
- Once the options are selected, clicking the "Generate Password" button will create a new password that meets the criteria.
- The generated password is displayed on the screen.

## Future Improvements

- **Password Strength Indicator**: Display the strength of the generated password.
- **Copy to Clipboard**: Add a button to easily copy the generated password to the clipboard.
- **Password History**: Save previously generated passwords for easy access.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

