class UI {
  constructor() {
    // App inicialization
    this.init();
  }
  // Method when the app starts
  init() {
    // dispolay categories in <select>
    this.printCategories();
  }
  // Print the categories
  printCategories() {
    const categoriesList = eventbrite
      .getCategoriesAPI()
      .then(categories => {
        const categoriesList = categories.categories.categories;
        const categoriesSelect = document.querySelector("#category");
        // Inserts categories into select
        categoriesList.forEach(category => {
          // Create the <option>
          const option = document.createElement("option");
          option.value = category.id;
          option.appendChild(document.createTextNode(category.name));
          categoriesSelect.appendChild(option);
        });
      })
      .catch(error => console.log(error));
  }

  // Displays a message
  printMessage(message, className) {
    // Create a div
    const div = document.createElement("div");
    div.className = className;
    // Add the Text
    div.appendChild(document.createTextNode(message));

    // Insert intothe HTML
    const searchDiv = document.querySelector("#search-events");
    searchDiv.appendChild(div);

    // Remove the alert after 3 seconds
    setTimeout(() => {
      this.removeMessage();
    }, 3000);
  }

  // Remove the message
  removeMessage() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
}
