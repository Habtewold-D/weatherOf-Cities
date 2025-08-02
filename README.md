# Weather Forecast App

A modern, responsive weather application built with React that provides real-time weather information for cities around the world.

## Features

- 🌤️ **Real-time Weather Data**: Get current weather conditions for any city
- 🎨 **Modern UI**: Beautiful glassmorphism design with smooth animations
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🔍 **Smart Search**: Search cities with autocomplete and error handling
- 🌡️ **Detailed Information**: Temperature, humidity, wind speed, and "feels like" temperature
- ⚡ **Fast & Lightweight**: Built with React and optimized for performance
- 🔒 **Secure**: API credentials stored in environment variables

## Technologies Used

- **React 18** - Modern React with hooks
- **React Icons** - Beautiful icon library
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with gradients and animations
- **OpenWeatherMap API** - Weather data provider

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
```

4. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

## Getting an API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key and add it to the `.env` file

## Usage

1. Enter a city name in the search box
2. Press Enter or click the search button
3. View the current weather information including:
   - Temperature
   - Weather condition with icon
   - Humidity percentage
   - Wind speed
   - "Feels like" temperature

## Features in Detail

### Modern UI Design
- Glassmorphism effect with backdrop blur
- Smooth gradient backgrounds
- Hover animations and transitions
- Responsive grid layout

### Weather Icons
- Dynamic weather icons based on conditions
- Clear, cloudy, rainy, and sunny states
- Consistent iconography throughout the app

### Error Handling
- Invalid city name detection
- Network error handling
- User-friendly error messages
- Loading states with spinner

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── WeatherApp.js
│   │   └── WeatherApp.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons
- [Create React App](https://create-react-app.dev/) for the project setup
