import React from 'react'
import './index.css'
import logo from './imageNav/FluxiVid.mp4'
import { Link } from 'react-router-dom'
import item from'../imageIndex/BackgroundFluxi.png'

const Navigation = () =>{


    const FondAccueil =(e)=>{
         
      
        var objRef = document.body;
         var objchange=  objRef.style.backgroundImage= `url(${item })`; 

         console.log(objchange)
     }


    return(

        <div class="nav">
            <section class="video"><video src={logo} autoplay="autoplay" muted="muted"  id=""/></section>
            {/*<section>Acceuil</section>     
            <section>Séries</section>  
            <section>Films</section>  
    <section>Ma liste</section>  */}


            {/* <button class="bouton" onClick=" " >Connexion</button> */}
            <Link to="login" class="bouton" onClick = {FondAccueil}>Connection</Link>
        </div>

        

    )


}

export default Navigation