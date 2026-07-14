// JAVASCRIPT WEEK 2 - DAY 1
const developerName = "Romel Gutlay";
const specializedTrack = "Programming .NET Web development";

// JAVASCRIPT WEEK 2 - DAY 1
let modificationCount = 0;

// JAVASCRIPT WEEK 2 - DAY 1
console.log("Dashboard engine loaded successfully.")

// Select DOM elements
const bioContainer = document.getElementById("bio-container")
const counterDisplay = document.getElementById("counter-display")
const updateButton = document.getElementById("update-btn")
const resetButton = document.getElementById("reset-btn") // 1. Selected the new reset button

function refreshDashboradView()
{
    modificationCount = modificationCount + 1;
    console.log("Running layout modification index: " + modificationCount);
    
    // FIX: Added the missing '+' after the <h2> line to prevent syntax compilation crashes
    const dynamicMarkup = "<h2>Name: " + developerName + "</h2>" +
                        "<p>Specialized <u>" + specializedTrack + "</u></p>" +
                        "<p>Status: Active System Developer </p>";
                        
    bioContainer.innerHTML = dynamicMarkup;
    counterDisplay.innerHTML = modificationCount;
}

// 2. Added the reset action function
function resetDashboardView() 
{
    modificationCount = 0; // Resets your tracking counter variable to zero
    console.log("modificationCount = 0 ");
    
    bioContainer.innerHTML = "";     // Wipes the HTML layout details clean
    counterDisplay.innerHTML = "0";  // Updates the visual UI display counter string
}

// 3. Attach click event listeners
updateButton.addEventListener("click", refreshDashboradView);
resetButton.addEventListener("click", resetDashboardView); // Triggers reset function on click



