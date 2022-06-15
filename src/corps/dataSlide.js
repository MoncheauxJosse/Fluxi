import { useState } from "react";
import item from './imageCaroucel/trilogie_noob.jpg'
import item2 from './imageCaroucel/titanic.jpg'
import item3 from './imageCaroucel/joker.jpg'
// la fonction Hook (useState) +fonction est mieux qu'une class ceci permet de creer des state ( changment ) dans une fonction



export const Data = () =>{
// met en place un etat initial , la fonction useState() PERMET DE DECLARER une variable d 'etat  initial( il peut prendre n importe qu'elle valeur)
//Ensuite le const prend 2 valeur , l ettat actuel (data) et une methode qui affichera le changement d'etat ( SetData)
// ainsi si nous voulons modifier la valeur de data , il faudrat appeler le setData

 const [data, setData] = useState([item ,
    item2,
    item3])

     return data
}
