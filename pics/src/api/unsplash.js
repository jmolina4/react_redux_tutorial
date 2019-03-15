import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1ebde06c6a98eb8bf4b1ccddc514267a2d37a41a7182457af4ea5e1d01adbdfe'
    }
});