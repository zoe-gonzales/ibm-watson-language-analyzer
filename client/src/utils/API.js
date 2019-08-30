import axios from 'axios';

export default {
    getKeywords(request) {
        return axios.post('/api/keywords', request);
    },
    getCategories(request) {
        return axios.post('/api/categories', request);
    },
    getEmotions(request) {
        return axios.post('/api/emotions', request);
    }
}