import axios from "axios";

//caminho na web da api
const api = axios.create({
    baseURL: 'http://viacep.com.br/ws'
});

export default api;