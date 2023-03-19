import axios from "axios";



const headers = new Headers();
headers.set("Access-Control-Allow-Origin", "*");

const api = axios.create({
  "baseURL": `${import.meta.env.VITE_PROD_HOST}`,
  "headers": {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post(`/users/validate/${token}`);
    return response.data;
  },

  signin: async (email: string, password: string) => {
    const response = await api.post("/users/signin", {
      email,
      password,
    });

    console.log(response.data);
    return response.data;
  },

  logout: async () => {
    //const response = await api.post("/logout");
    //return response.data;
    localStorage.clear();
    console.log("Usuário saiu da sessão...");
  },
});
