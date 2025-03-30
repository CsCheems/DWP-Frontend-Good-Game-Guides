import api from './api.jsx';

export const comentar = async (username, comentario, juegoId) => {
    try {
        const response = await api.post("/comment/newComment", {username, comentario, juegoId});
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Error al postear comentario");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        }
    }
}

export const obtenerComentarios = async ( juegoId ) => {
    try {
        const response = await api.get(`/comment/getComments/${juegoId}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Error al obtener comentarios");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        }
    }
}

export const responderComentario = async ( username, comentarioId, respuesta, juegoId) => {
    console.log(username, comentarioId, respuesta, juegoId);
    try{
        const response = await api.post("/comment/respondComment", {username, comentarioId, respuesta, juegoId});
        console.log(response.data);
        return response.data;
    }catch(error){
        if (error.response) {
            throw new Error(error.response.data.message || "Error al responder comentario");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        }
    }
}