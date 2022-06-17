import React from 'react'
import './index.css'
import logo from './imageNav/FluxiVid.mp4'

const Navigation = () =>{



    return(

        <div class="nav">
            <section class="video"><video src={logo} autoplay="autoplay" muted="muted"  id=""/></section>
            <section>Acceuil</section>     
            <section>Séries</section>  
            <section>Films</section>  
            <section>Ma liste</section>  


            <button class="bouton" onClick=" " >Connexion</button>
        </div>

        

    )


}

export default Navigation