import axios from 'axios';

export default {
    getKeywords(request) {
        return axios.post('http://localhost:1333/api/keywords', request);
    },
    getCategories(request) {
        return axios.post('http://localhost:1333/api/categories', request);
    },
    getEmotions(request) {
        return axios.post('http://localhost:1333/api/emotions', request);
    }
}