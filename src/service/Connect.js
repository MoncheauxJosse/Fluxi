import axios from "axios"




export const postConexions = (dataIsncription) => {
    
   
    console.log("connection a l inscription")


    return axios.post('http://localhost:7008/api/signup',{dataIsncription})
}

export const postlogin = (dataLogin) => {

   
    console.log("connection au login")


    return axios.post('http://localhost:7008/api/login',{dataLogin})
}