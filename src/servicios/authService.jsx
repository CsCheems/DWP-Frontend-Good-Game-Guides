import api from './api.jsx';


export const login = async (username, password, setUser, setRequire2FA) =>{
    
    try {
        const response = await api.post("/auth/login", {username, password});
        console.log(response.data.intMessage);
        if(response.data.intMessage === '2FA requerido'){
            setRequire2FA(true);
            return { require2FA: true };
        }
        if(response.data.result.token){
            localStorage.setItem("token", response.data.result.token);
            const userData = JSON.parse(atob(response.data.result.token.split(".")[1]));
            console.log(userData);
            setUser(userData);
            return response;
        }else{
            throw new Error("Token no encontrado en la respuesta"); 
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Error en la autenticación");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        }
    }
}

export const verificar2FA = async (code, username, setUser) => {
    try {
        
        const response = await api.post("/auth/verify2FA", { 
            username, 
            code 
        });

        if (response.data && response.data.result.token) {
            localStorage.setItem("token", response.data.result.token);
            localStorage.removeItem("pendingUser");
            const userData = JSON.parse(atob(response.data.result.token.split(".")[1]));
            console.log(userData);
            setUser(userData);
            return response.data;
        } else {
            throw new Error("Código 2FA incorrecto o no se recibió el token.");
        }
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error al verificar 2FA");
    }
};

export const registro = async (email, phone, dob, username, password) => {
    try {
        const response = await api.post('/auth/registroUsuario', {email, phone, dob, username, password});
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Error en el registro");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        }
    }
}

export const activar2FA = async (username, code, setUser) => {
    try {
        const response = await api.post('/auth/activate2FA', {username, code});
        console.log(response.data.result.token);
        if(response.status === 200){
            localStorage.setItem("token", response.data.result.token);
            const userData = JSON.parse(atob(response.data.result.token.split(".")[1]));
            setUser(userData);
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Error al activar MFA");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        }
    }
}

export const generarQR = async (username) => {
    try {
        const response = await api.post('/auth/generateQR', {username});
        console.log(response.data);
        if(response.status === 200){
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Error al generar QR");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        }
    }
}

export const desactivar2FA = async (username, code) => {
    console.log(username, code);
    try {
        const response = await api.post('/auth/deactivate2FA', {username, code});
        console.log(response);
        if(response.status === 200){
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Error al desactivar MFA");
        } else if (error.request) {
            throw new Error("Error en la solicitud. No se recibió respuesta.");
        } else {
            throw new Error(error.message || "Error desconocido");
        }
    }
}


