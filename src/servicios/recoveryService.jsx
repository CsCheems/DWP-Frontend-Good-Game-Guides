import api from './api.jsx';

export const enviarAEmail = async ( email ) => {
    try {
        const res = await api.post('/recovery/recoverPassword', {email});
        if(res.status === 200){
            return res;
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Error al recuperar password");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        } 
    }
}

export const verificarToken = async (token) => {
    try{
        const res = await api.post('/recovery/validateToken', {token});
        if(res.status === 200){
            return res;
        }
    }catch(error){
        if (error.response) {
            throw new Error(error.response.data.message || "Error al validar token");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        } 
    }
}

export const cambiarPassword = async (password, email) => {
    try{
        const res = await api.post('/recovery/resetPassword', {password, email});
        if(res.status === 200){
            return res;
        }
    }catch(error){
        if (error.response) {
            throw new Error(error.response.data.message || "Error al cambiar password");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        } 
    }
}