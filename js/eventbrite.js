class EventBrite {
  // Constructor when instanciate
  constructor() {
    this.auth_token = "ZC4CZGW3GV73QPQZCJXK";
  }

  // Get categories from API
  async getCategoriesAPI() {
    // Query the API
    const categoriesResponse = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`
    );

    // Hold for the response and then return as json
    const categories = await categoriesResponse.json();

    return {
      categories
    };
  }
}
