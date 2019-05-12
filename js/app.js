// Instanciate both classes

const eventbrite = new EventBrite();
const ui = new UI();

// Listener for the submit button
document.getElementById("submitBtn").addEventListener("click", e => {
  e.preventDefault();

  // get values from form
  const eventName = document.getElementById("event-name").value;
  const category = document.getElementById("category").value;

  //   console.log(eventName + " : " + category);

  if (eventName !== "") {
    // Query Event Brite API
  } else {
    // Print a message
    ui.printMessage(
      "Add an Event or City",
      "text-center alert alert-danger mt-4"
    );
  }
});
