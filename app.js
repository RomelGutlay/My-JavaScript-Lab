const alertbox = document.getElementById("status-notification");


const updateButton = document.getElementById("update-btn");


    updateButton.addEventListener("click", updater);

const headerDiv = document.getElementById(".custom-nordic-header");

function updater() {
  // Update the h1 content
  alertbox.innerHTML = "<h1>Updated Banner!</h1>"
}

updateButton.addEventListener("click", updater);
