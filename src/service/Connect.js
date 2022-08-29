//import axios from "axios"
import { Hashcode } from "./hasheCode.js"

const annonces = []

export const postConexions = (data) => {



    let hasrecupe = Hashcode(data.password)
    //let token = lol;
    data.password =  hasrecupe 
    console.log(data)


    return /*axios.get('http://localhost/annonces')*/
}