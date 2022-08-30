import axios from "axios"




export const postConexions = async (dataIsncription) => {
    
   
    console.log("entre dans la methode axios Postconexion")

    console.log("Verification de l objet")

    console.log(dataIsncription)

    //const rep = await axios.post('http://localhost:7008/api/signup',{essai : 1})


    return await axios.post('http://localhost:7008/api/signup',{dataIsncription})
}

export const postlogin = async (dataLogin) => {

   
    console.log("entre dans la methode axios postLogin")
    console.log("Verification de l objet")
    console.log(dataLogin)


    return await axios.post('http://localhost:7008/api/login',{dataLogin})
}