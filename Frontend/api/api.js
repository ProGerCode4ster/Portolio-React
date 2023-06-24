import axios from "axios"

const client = axios.create({
    baseURL:"https://backend-portfolio-ufio.onrender.com/"
    //BaseURL: "http://localhost:4000"
});

export default client;