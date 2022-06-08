import React from 'react'
import img from './imageCaroucel/trilogie_noob.jpg'
import img1 from './imageCaroucel/titanic.jpg'
import img2 from './imageCaroucel/joker.jpg'
import  './corp.css'


const Corps = () =>{

    
    

    return(

        <div class="TitreCaroucel">Nouveaux
        <div class="caroucel">
            <div class="left"></div>
            <div class="item"><img  src={img} alt="img1"/></div>
            <div class="item"><img  src={img1} alt="img2"/></div>
            <div class="item"><img  src={img2} alt="img3"/></div>
            <div class="item">4</div>
            <div class="item">5</div> 
            <div class="right"></div>
           
        </div>
        </div>

        

    )


}

export default Corps