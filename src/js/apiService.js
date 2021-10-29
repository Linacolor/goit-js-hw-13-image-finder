export default class ServiceAPI {
  constructor() {
    this.BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal`;
    this.API_KEY = `&key=24043742-8a5597c09b63d9588d1667fba`;
    this.page = 1;
    this.searchQuery = '';
    this.perPage = 12;
  }

  async fetchCardImage() {
    const response = await fetch(
      `${this.BASE_URL}&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.API_KEY}`,
    );
    const data = await response.json();
    this.page += 1;
    return data.hits;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(value) {
    this.searchQuery = value;
  }
}
