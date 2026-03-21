const temperature = 8;
const windSpeed = 10;

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChill = document.querySelector("#windchill");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

function calculateWindChill(tempC, speedKmH) {
    return 13.12 + 0.6215 * tempC - 11.37 * speedKmH ** 0.16 + 0.3965 * tempC * speedKmH ** 0.16;
}

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChill.textContent = "N/A";
}