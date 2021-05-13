import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bxf7DLmKrMfxUjYzjSyXj9cELSnmOtwrBn7BNYDmf8E'
    }
});