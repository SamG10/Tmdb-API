import axios from "axios";
import { API_Base } from "./ApiBase";
import { API_KEY } from "./ApiKey";

function getPopularFilms(page){
    return axios.get(API_Base + "movie/popular?api_key=" + API_KEY +"&language=fr-FR&page=" + page).then(response => response.data);
}

function getNowPlaying(page){
    return axios.get(API_Base + "movie/now_playing?api_key=" + API_KEY +"&language=fr-FR&page=" + page).then(response => response.data);
}

function getUpComing(page){
    return axios.get(API_Base + "movie/upcoming?api_key=" + API_KEY +"&language=fr-FR&page=" + page).then(response => response.data);
}

function getDescription(id){
    return axios.get(API_Base + 'movie/'+id+'?api_key=' + API_KEY + "&language=fr-FR").then(response => response.data);
}

function getActor(id){
    return axios.get(API_Base + 'movie/'+id+'/credits?api_key=' + API_KEY + "&language=fr-FR").then(response => response.data);
}


export default {
    getPopularFilms,
    getNowPlaying,
    getUpComing,
    getDescription,
    getActor
}