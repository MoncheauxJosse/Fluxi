/*import bcrypt from 'bcryptjs'
import { postConexions, postlogin } from "../service/Connect.js";
export const Hashcode = async(dataConexion) =>{


    try{
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(dataConexion.password,salt)

        console.log("passe dans bcrypt")
        
        dataConexion.password = hashPassword

          postConexions( dataConexion)

          console.log("par dans login axios")

          postlogin( dataConexion)
       

        return "ok"

    }catch{


        return "erreur dans le haschcode"
    }



}


export const Compare = async (mdp,mdpDb)=>{

    
    try{
        

        if (await bcrypt.compare(mdp,mdpDb)){
          return true
        }else{

            return false
        }
    
    
      }catch{


        return "erreur"


      }

}*/