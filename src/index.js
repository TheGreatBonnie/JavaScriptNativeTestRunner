const axios = require("axios");

class MakeRequest {
  constructor() {}
  static async fetchDataFromAPI(id) {
    const { data: todo } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return todo;
  }

  static slugifyTitle(todo) {
    const slug = `${todo.title.replace(/ /g, "-")}${todo.id}`;
    return { ...todo, slug };
  }

  static async addToDB() {
    let todo = await this.fetchDataFromAPI();
    todo = this.slugifyTitle(todo);
    return todo;
  }
}

module.exports = MakeRequest;
