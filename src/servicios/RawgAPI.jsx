const key = "2c31e02ea2824b4cab63f4b647c3cfa2";
import axios from 'axios';

const rawgApi = axios.create({
    baseURL: 'https://api.rawg.io/api/'
})

export const obtenerGenerosLista = rawgApi.get('/genres?key='+key);

export const obtenerJuegos = rawgApi.get('/games?key='+key);

export const obtenerGeneroPorId = (id) => rawgApi.get('/games?key='+key+'&genres='+id);

export const buscarJuego = (query) => rawgApi.get(`/games?key=${key}&search=${query}`);

export const obtenerJuegoPorId = (id) => rawgApi.get(`/games/${id}?key=${key}`);

export const obtenerJuegosPorGenero = (id) => rawgApi.get(`/games?key=${key}&genres=${id}&page_size=20`);