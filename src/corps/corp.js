import React, { useState,useEffect} from 'react'
import {Data} from './dataSlide'
import  './corp.css'


const Corps = () =>{

    // import la fonction Data et l ajoute dans un state nomé dataSLide
    const [dataSlide, setData] = useState(Data); 
    const [slideIndex, setSlideIndex] = useState(5)
    const [afficheFin, setAfficheFin] = useState(5)
    const [afficheDebut, setAfficheDebut] = useState(0)


    

    const nextSlide = () => {

        console.log("sa passe")
        console.log("le slide index "+slideIndex)
        if(slideIndex !== dataSlide.length){

            console.log("longuer tableaux "+dataSlide.length)
            setData(dataSlide)
            setSlideIndex(slideIndex + 1)
            setAfficheFin(afficheFin +1)
            setAfficheDebut(afficheDebut +1)

        } 
        else if (slideIndex === dataSlide.length){

            console.log("slide a la fin")
            setData(dataSlide)
            setSlideIndex(5)
            setAfficheFin(5)
            setAfficheDebut(0)
            
        }
    }

    const prevSlide = () => {
           
        console.log("en arriere !")

        if(slideIndex !== 5){
            setData(dataSlide)
            setSlideIndex(slideIndex - 1)
            setAfficheFin(afficheFin -1)
            setAfficheDebut(afficheDebut -1)
        }
        else if (slideIndex === 1){
            setData(dataSlide)
            setSlideIndex(dataSlide.length)
        }
    }

    // je vais devoir ajouter un id a chaque image et( recuper l id de l image !)
    const detect =(e)=>{

      
        const i= e.currentTarget.id
         
      
        var objRef = document.body;
         var objchange=  objRef.style.backgroundImage= `url(${dataSlide[i].back})`; 
     }

    

    // renvoie une map de dataSlide , obj et index , a chaque fois que la map sort une image il augmente la varibale index .
    // on appel dans <img le tableaux dataSlide[] avec la variable index a l'interieur , ainsi on appel dataslide[0] puis 1 , puis 2 et ect....
    return (
        
        <div className="caroucel">
            <button class="left" onClick={prevSlide}> {"<"} </button>
            {dataSlide.map((obj, index) => {

                if( index<afficheFin && index>=afficheDebut ){ 
                    
                    return (
                    <div id={index} class="item" onMouseEnter={detect}>
                        <img src={dataSlide[index].item} alt={"img"+(index)}  />
                    </div>
                             )
                    }       
               
            })}
            <button  class="right" onClick={nextSlide} >{">"}</button>
            
        </div>
    )


}

export default Corps