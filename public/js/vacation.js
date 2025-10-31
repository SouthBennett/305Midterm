document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("vacation-form");

  const destination = document.getElementById("destination");
  const date = document.getElementById("date");
  const travelers = document.getElementById("travelers");

  const errDestination = document.getElementById("err-destination");
  const errDate = document.getElementById("err-date");
  const errTravelers = document.getElementById("err-travelers");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops the page from refreshing

  // Clears any previous error messages
  errDestination.textContent = "";
  errDate.textContent = "";
  errTravelers.textContent = "";

  let isValid = true;

  // Validate Destination
  if (destination.value.trim() === "") {
    errDestination.textContent = "Please choose a destination.";
    isValid = false;
  }

  // Validate Departure Date
  if (date.value === "") {
    errDate.textContent = "Please select a departure date."
    isValid = false;
  }

  // Validate number of traveler
  const numTravelers = parseInt(travelers.value);
  if (isNaN(numTravelers) || numTravelers <= 0) {
    errTravelers.textContent = "Please enter at least 1 traveler.";
    isValid = false;
  }

  // submits the form if all fields are valid
  if (isValid) {
    form.submit();
  }
  });
});