import React from 'react'
import img from './imageCaroucel/trilogie_noob.jpg'
import img1 from './imageCaroucel/titanic.jpg'
import  './corp.css'


const Corps = () =>{

    
    

    return(

        
        <div class="caroucel">
            <div class="item"><img  src={img} alt="img1"/></div>
            <div class="item"><img  src={img1} alt="img2"/></div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
          
           
        </div>

        

    )


}

export default Corps