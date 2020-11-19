import { apiKey } from './fetch.js';

const PUBLIC_URL = 'https://api.themoviedb.org/3/search/movie';

class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
        fetchImages() {

            const url = `${PUBLIC_URL}?api_key=${apiKey}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
            const responce = fetch(url).then(response => response.json());
            return responce;
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }

     get currentPage() {
        return this.page;
    }
    set currentPage(newPage) {
        this.page = newPage;
    }
}

export { ImageApiService };