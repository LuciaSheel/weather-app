# Weather App

## Overview

This Weather App allows users to search for the current weather and forecast, and toggle between Celsius and Fahrenheit. The app integrates the OpenWeatherMap API to fetch weather data and provides a responsive UI with light/dark mode.

## Features

- **Search bar** to search for any city's weather.
- **Current weather display** with temperature, humidity, and wind speed.
- **Weather forecast** showing high/low temperatures for the next few days.
- **Celsius/Fahrenheit toggle** for temperature units.
- **Light/Dark mode** for a personalized experience.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/LuciaSheel/weather-app.git
    ```

2. Install dependencies:
    ```bash
    cd weather-app
    npm install
    ```

3. Create a `.env` file in the root of the project and add your OpenWeatherMap API key:
    ```bash
    VITE_WEATHER_API_KEY=your_api_key_here
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to view the app.

## Usage

1. **Search for a city** using the search bar.
2. **Toggle between Celsius and Fahrenheit** to change the temperature units.
3. **Switch between light and dark modes** using the theme toggle button.
4. **View the high/low temperature forecast** for the current day, and the next five days.

## Technologies Used

- **React** for the frontend framework.
- **Vite** as the build tool.
- **Axios** for making HTTP requests
- **OpenWeatherMap API** for fetching weather data.
- **CSS** for styling.
- **State Management** using React hooks.

## Project Structure

## Project Structure

## Project Structure

weather-app/  
│── node_modules/             # Dependencies (auto-generated)  
│── src/                      # Main source code  
│   │── components/           # Reusable UI components  
│   │   │── Button.jsx  
│   │   │── ErrorMessage.jsx  
│   │   │── Forecast.jsx  
│   │   │── SearchBar.jsx  
│   │   │── ThemeToggle.jsx  
│   │   │── UnitToggle.jsx  
│   │   │── WeatherDisplay.jsx  
│   │  
│   │── context/              # Context API for state management  
│   │   │── ThemeContext.jsx  
│   │  
│   │── styles/               # Global styles  
│   │   │── global.css  
│   │  
│   │── utils/                # Helper functions  
│   │   │── api.js  
│   │  
│   │── App.jsx               # Main application component  
│   │── main.jsx              # Entry point  
│  
│── .env                      # Environment variables  
│── .gitignore                # Git ignore file  
│── eslint.config.js          # ESLint configuration  
│── index.html                # Main HTML file  
│── package-lock.json         # Package lock file  
│── package.json              # Project metadata and dependencies  
│── README.md                 # Project documentation  
│── vite.config.js            # Vite configuration  
 


Thanks for checking out my weather app! Hope you have sunshine wherever you are!☀️😊


