import axios from 'axios';

export const getHomeData = () => {
    return axios.get('/api/home');
};
