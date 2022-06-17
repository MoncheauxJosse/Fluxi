
import item from './imageCaroucel/trilogie_noob.jpg'
import item2 from './imageCaroucel/titanic.jpg'
import item3 from './imageCaroucel/joker.jpg'
import item4 from './imageCaroucel/DocteurStrangeMultiverse.jpg'
import item5 from './imageCaroucel/Kaamelott.jpg'
import item6 from './imageCaroucel/mortal-affiche-francaise-1348783.jpg'
import item7 from './imageCaroucel/1917.jpg'
import item8 from './imageCaroucel/TopGunMaverick.jpg'
// la fonction Hook (useState) +fonction est mieux qu'une class ceci permet de creer des state ( changment ) dans une fonction



export const Data = () =>{
// met en place un etat initial , la fonction useState() PERMET DE DECLARER une variable d 'etat  initial( il peut prendre n importe qu'elle valeur)
//Ensuite le const prend 2 valeur , l ettat actuel (data) et une methode qui affichera le changement d'etat ( SetData)
// ainsi si nous voulons modifier la valeur de data , il faudrat appeler le setData

 const data =[item ,
    item2,
    item3,
    item4,
    item5,
   item6,
   item7,
   item8]



    
     return data
}
