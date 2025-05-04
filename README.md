
# ArtiSumm
## Article Summarizer

ArtiSumm is an AI-powered article summarizer that helps users quickly grasp the key points of lengthy articles. It uses OpenAI's GPT-4 for summarization and is built with **React.js**, **Tailwind CSS**, **Redux**, and **RapidAPI**.

The application provides a seamless, user-friendly interface where you can paste an article's URL, and the app will generate a concise summary in real-time. ArtiSumm aims to save you time and enhance productivity by providing efficient article summaries.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **AI-Powered Summarization**: Utilizes OpenAI GPT-4 via the RapidAPI platform for generating concise summaries.
- **State Management with Redux**: Efficiently manage state across the application using Redux, ensuring smooth UI and data flow.
- **Simple User Interface**: Clean and minimal design for easy navigation.
- **Support for Article URLs**: Paste any article's URL, and the AI will process and generate a summary.
- **Real-Time Results**: Get your article summary within seconds.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Rate Limitation**: The app is rate-limited to **50 requests per month** for free users.
- **Open Source**: Free to use and contribute to.

---

## Technologies

ArtiSumm is built using the following technologies:

- **Frontend**:
  - **React.js**: JavaScript library for building interactive user interfaces.
  - **Redux**: State management library to handle the app’s global state efficiently.
  - **Tailwind CSS**: Utility-first CSS framework to design a responsive and custom UI.
  - **RapidAPI**: For connecting to OpenAI's GPT-4 API and other services for AI-powered summarization.

---

## Installation

To run **ArtiSumm** locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/8mileverse/ArtiSumm.git
cd ArtiSumm
````

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. Then, install the required dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add your **RapidAPI** key.

```env
REACT_APP_RAPIDAPI_KEY=your-rapidapi-key
```

* You can get the RapidAPI key by signing up at [RapidAPI](https://rapidapi.com/).

### 4. Start the Development Server

To start the app locally, run:

```bash
npm start
```

Your app should now be running at `http://localhost:3000`.

---

## Usage

1. Navigate to the **ArtiSumm homepage**.
2. Paste the **URL of the article** you want to summarize in the input field.
3. Click the **"Summarize"** button.
4. Wait for a few seconds as the application generates the summary.
5. The summary will be displayed right below the input field.

---

## Contributing

We encourage contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Implement your changes.
4. Commit the changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Submit a pull request.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

* **OpenAI GPT-4**: For providing the AI-powered summarization.
* **Tailwind CSS**: For the styling and responsive design framework.
* **React.js**: For making it easy to build and maintain the frontend.
* **Redux**: For handling global state management in a structured and efficient manner.
* **Adrian of JSM**: A special thanks to Adrian from JSM for his helpful tutorial and guidance while building this project. His tutorial was invaluable in getting the project off the ground.




The **rate-limitation** feature is now included in the **Features** section to indicate that users can make **50 requests per month**. Let me know if you need any further edits!
