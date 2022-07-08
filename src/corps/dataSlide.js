//import image du caroucel
import item from './imageCaroucel/trilogie_noob.jpg'
import item2 from './imageCaroucel/titanic.jpg'
import item3 from './imageCaroucel/joker.jpg'
import item4 from './imageCaroucel/DocteurStrangeMultiverse.jpg'
import item5 from './imageCaroucel/Kaamelott.jpg'
import item6 from './imageCaroucel/mortal-affiche-francaise-1348783.jpg'
import item7 from './imageCaroucel/1917.jpg'
import item8 from './imageCaroucel/TopGunMaverick.jpg'
// imageBack-end
import back from './bacgroundImage/noobBack.jpg'
import back2 from './bacgroundImage/titanic-love.jpg'
import back3 from './bacgroundImage/jokerBack.jpg'
import back4 from './bacgroundImage/doctor-strange-in-the-multiverse-of-madness-wont-be-one-of-t_wh9z.jpg'
import back5 from './bacgroundImage/kaamelott1634226347031-format16by9.png'
import back6 from './bacgroundImage/mortal2020moviereview.jpg'
import back7 from './bacgroundImage/1917Back.jpg'
import back8 from './bacgroundImage/topGunBack.png'



export const Data = () =>{
// met en place un etat initial , la fonction useState() PERMET DE DECLARER une variable d 'etat  initial( il peut prendre n importe qu'elle valeur)
//Ensuite le const prend 2 valeur , l ettat actuel (data) et une methode qui affichera le changement d'etat ( SetData)
// ainsi si nous voulons modifier la valeur de data , il faudrat appeler le setData

 const data =[
  {
  item :item ,
  back :back
},
  {
    item :item2 ,
    back :back2
  },
    {
      item :item3 ,
      back :back3
    },
      {
        item :item4 ,
        back :back4
      },
        {
          item :item5 ,
          back :back5
        },
          {
            item :item6 ,
            back :back6
          },
            {
              item :item7 ,
              back :back7
            },
              {
                item :item8 ,
                back :back8
              },]



    
     return data
}
