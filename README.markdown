# Netflix Clone Landing Page

## Project Overview
This project is a front-end clone of the Netflix landing page, built using HTML, CSS, and JavaScript. It replicates the core features of the Netflix website, including a responsive design, email signup form, FAQ accordion, and language selector. The project is designed to be visually similar to the Netflix South Africa landing page, with a focus on user interaction and accessibility.

## Features
- **Responsive Design**: Adapts to various screen sizes using CSS media queries and flexible layouts.
- **Email Signup Form**: Validates user email input and provides feedback with success/error messages.
- **FAQ Accordion**: Interactive FAQ section with smooth animations and keyboard accessibility.
- **Language Selector**: Basic language switching functionality with content updates (English and placeholder "Other" language).
- **Profile Management**: A profile page for editing user details, including profile picture upload (placeholder functionality).
- **Sign-in Page**: A dedicated sign-in page with email validation and forgot password link.

## File Structure
```
netflix-clone/
├── index.html          # Main landing page
├── signin.html         # Sign-in page
├── profile.html        # User profile editing page
├── style.css           # Styles for the entire project
├── script.js           # JavaScript for interactivity
├── images/             # Background images and logo
│   └── ZA-en-20230904-popsignuptwoweeks-perspective_alpha_website_small.jpg
└── README.md           # Project documentation
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd netflix-clone
   ```
3. Open `index.html` in a web browser to view the landing page. No server setup is required as the project uses static files.

## Usage
- **Landing Page (index.html)**: Displays the main Netflix landing page with a signup form, feature sections, and FAQ accordion.
- **Sign-in Page (signin.html)**: Allows users to sign in with email validation.
- **Profile Page (profile.html)**: Provides a basic interface for editing user profile details.
- **Interactivity**:
  - Click FAQ questions to expand/collapse answers.
  - Enter an email in the signup form to test validation (no backend processing).
  - Change the language in the dropdown to see button text updates (limited to English and a placeholder language).
- **Accessibility**: FAQ questions are keyboard-navigable (use Enter or Space to toggle).

## Technologies Used
- **HTML5**: Structure of the web pages.
- **CSS3**: Styling with a custom Netflix-like theme, including gradients and responsive design.
- **JavaScript**: Handles form validation, FAQ accordion, and language selection functionality.
- **External Resources**:
  - Poppins font (via Google Fonts, assumed to be linked in HTML).
  - Background image for the header (included in the `images` folder).

## Development Notes
- The project is purely front-end and does not include backend functionality for actual user authentication or data storage.
- The language selector currently supports English and a placeholder "Other" language (Spanish translations as an example).
- Form submissions are simulated with a mock API call (1-second delay) for demonstration purposes.
- The profile picture upload is a placeholder and does not process actual file uploads.