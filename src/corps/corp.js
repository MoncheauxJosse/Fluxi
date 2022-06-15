import React, { useState } from 'react'
import {Data} from './dataSlide'
import  './corp.css'


const Corps = () =>{

    // import la fonction Data et l ajoute dans un state nomé dataSLide
    const [dataSlide] = useState(Data);
    

    console.log(dataSlide.length);
    return(

        <div class="TitreCaroucel">Nouveaux
        <div class="caroucel">
            <div class="left"></div>
            <div class="item"><img  src={dataSlide[0]} alt="img1"/></div>
            <div class="item"><img  src={dataSlide[1]} alt="img2"/></div>
            <div class="item"><img  src={dataSlide[2]} alt="img3"/></div>
            <div class="item">4</div>
            <div class="item">5</div> 
            <div class="right"></div>
           
        </div>
        </div>

        

    )


}

export default Corps