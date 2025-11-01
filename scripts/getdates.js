// Display current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display last modified date
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
