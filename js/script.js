// Function to get weather information based on user input
function getWeather() {
    // Get the city value from the input field
    const city = document.getElementById('city').value;

 // Dynamically add student ID and name
 const studentInfoDiv = document.getElementById('student-info');
 studentInfoDiv.innerHTML = '<p>Student ID: 200477161</p><p>Name: Dev Sunil Dalvi</p>';
    // Check if the city is not provided
    if (!city) {
        alert('Please enter a city');
        return;
    }

    // Construct the URL for the OpenWeatherMap API
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=253682c0bd759acfb4255d4aa08c3dd7`;

    // Fetch data from the API
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            // Display the weather information on the page
            displayWeather(data);
        })
        .catch(error => {
            // Handle errors, log to console, and alert the user
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });
}

// Function to display weather information on the page
function displayWeather(data) {
    // Get elements by ID
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');

    // Clear previous content
    weatherInfoDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    // Extract relevant data from the API response
    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
    const description = data.weather[0].description;

    // Create HTML for temperature display
    const temperatureHTML = `
        <p>${temperature}°C</p>
    `;

    // Create HTML for general weather information display
    const weatherHtml = `
        <p>${cityName}</p>
        <p>${description}</p>
    `;

    // Update the HTML content of the corresponding divs
    tempDivInfo.innerHTML = temperatureHTML;
    weatherInfoDiv.innerHTML = weatherHtml;
}
