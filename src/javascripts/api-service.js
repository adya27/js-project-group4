import { apiKey } from './fetch.js';
import { givesGenresArr } from './givesGenresNames';
import getYearFromReleaseDate from './getYearFromReleaseDate';

const PUBLIC_URL = 'https://api.themoviedb.org/3/search/movie';

class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.totalResults = 0;
        this.totalPages = [];
        }
    fetchImages() {
        const url = `${PUBLIC_URL}?api_key=${apiKey}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
        return fetch(url)
            .then(response => response.json())
            .then(({ results, total_results, total_pages }) => {
                results.forEach(movie => {
                    movie.genre = givesGenresArr(movie.genre_ids);
                    movie.year = getYearFromReleaseDate(movie.release_date);
                    })
                this.getTotalResults(total_results);
                this.getPagesCount(total_pages);
                this.resetPage();
                return results;
            })
    }
    getTotalResults(value) {
        this.totalResults = value;
    }
    getPagesCount(count) {
        this.totalPages.length = count;
    }
    setPage(value) {
        this.page = value;
    }
    resetPage() {
        this.page = 1;
    }
}

export { ImageApiService };
