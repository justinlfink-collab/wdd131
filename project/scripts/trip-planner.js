const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");
const form = document.querySelector("#tripForm");
const countDisplay = document.querySelector("#submissionCount");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = "Last Modified: " + document.lastModified;
}

let count = Number(localStorage.getItem("tripCount")) || 0;

if (countDisplay) {
    countDisplay.textContent = `Trip Plans Submitted: ${count}`;
}

if (form) {
    form.addEventListener("submit", function () {
        count++;
        localStorage.setItem("tripCount", count);
    });
}