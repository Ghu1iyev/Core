import axios from 'axios'

const Http = axios.create({
    baseURL: "http://localhost:1337/api"
});

export const getProducts = async () => {
    return await Http.get('/product').then((res) => res.data)
}