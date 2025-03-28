import api from './api.jsx';


export const login = async (username, password, setUser) =>{
    console.log("Enviando credenciales:", username, password);
    try {
        const response = await api.post("/auth/login", {username, password});
        if(response.data && response.data.result.token){
            localStorage.setItem("token", response.data.result.token);
            const userData = JSON.parse(atob(response.data.result.token.split(".")[1]));
            console.log(userData);
            setUser(userData);
        }else{
            throw new Error("Token no encontrado en la respuesta"); 
        }
        return response.data;
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

export const registro = async (email, phone, dob, username, password) => {
    try {
        const response = await api.post('/auth/registroUsuario', {email, phone, dob, username, password});
        console.log(response.data);
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
