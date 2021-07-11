import axios from "axios";

// Base de url donde se realizan las solicitudes

const instance= axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;