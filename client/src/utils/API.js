import axios from 'axios';

export default {
    getKeywords(request) {
        return axios.post('https://languageanalyzer.herokuapp.com/api/keywords', request);
    },
    getCategories(request) {
        return axios.post('https://languageanalyzer.herokuapp.com/api/categories', request);
    },
    getEmotions(request) {
        return axios.post('https://languageanalyzer.herokuapp.com/api/emotions', request);
    }
}