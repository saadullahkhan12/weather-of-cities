var touristDestinations = [
    { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
    { name: "Hunza Valley", latitude: 36.3167, longitude: 74.65 },
    { name: "Skardu", latitude: 35.2971, longitude: 75.6333 },
    { name: "Fairy Meadows", latitude: 35.4213, longitude: 74.5969 },
    { name: "Naltar Valley", latitude: 36.1396, longitude: 74.1928 },
    { name: "Murree", latitude: 33.9062, longitude: 73.3903 },
    { name: "Kaghan Valley", latitude: 34.7939, longitude: 73.5793 },
    { name: "Swat Valley", latitude: 35.222, longitude: 72.4258 },
    { name: "Chitral", latitude: 35.851, longitude: 71.7864 },
    { name: "Neelum Valley", latitude: 34.5857, longitude: 73.907 },
    { name: "Ratti Gali Lake", latitude: 34.8861, longitude: 74.0486 },
    { name: "Shangrila Resort", latitude: 35.3525, longitude: 75.5088 },
    { name: "Deosai National Park", latitude: 35.0303, longitude: 75.443 },
    { name: "Khunjerab Pass", latitude: 36.8497, longitude: 75.4306 },
    { name: "Shogran", latitude: 34.6271, longitude: 73.495 },
    { name: "Rama Meadows", latitude: 35.2918, longitude: 74.9643 },
    { name: "Gojal Valley", latitude: 36.6833, longitude: 74.85 },
    { name: "Kalash Valley", latitude: 35.6699, longitude: 71.7309 },
    { name: "Ayubia National Park", latitude: 34.0607, longitude: 73.402 },
    { name: "Saiful Muluk Lake", latitude: 34.8722, longitude: 73.6919 },
    { name: "Khaplu", latitude: 35.1404, longitude: 76.337 },
    
];

var locations_dropdown = document.getElementById("locations_dropdown");
locations_dropdown.addEventListener("change", function () {
    console.log(this.value);
    console.log(touristDestinations[this.value]);

    fetchWeather(
        touristDestinations[this.value].latitude,
        touristDestinations[this.value].longitude,
        displayWeatherData
    );
});

function fetchWeather(lat, lon, callback) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c153479685c47f1b34a83591f3b1acbe`
    )
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        });
}

function displayWeatherData(info) {
    console.log("info==>", info);
    temp.innerText = info.main.temp
    
    city.innerText = info.name
    humidity.innerText = info.main.humidity
    
sea_level.innerText = info.main.sea_level
pressure.innerText = info.main.pressure


}