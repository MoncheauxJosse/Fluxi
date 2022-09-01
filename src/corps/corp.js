import React, {useState,useEffect} from 'react'
//import {Data} from './dataSlide'
import { getCarroucel } from '../service/Connect';
import useModal from '../UseModal';
import Modal from '../Modal';
import  './corp.css'


const Corps = () =>{

    // import la fonction Data et l ajoute dans un state nomé dataSLide
    const [data, setData] = useState({hist: []}); 
    const [slideIndex, setSlideIndex] = useState(5)
    const [afficheFin, setAfficheFin] = useState(5)
    const [afficheDebut, setAfficheDebut] = useState(0)

    const lienBase = `http://localhost:7008/`

    const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = useModal();

    useEffect(() => {

        async function fetchData() {
        const result = await getCarroucel()
    
        //console.log(result.data)
        setData({hist:result.data});
        };

        fetchData();
      },[]);
    

    const nextSlide = () => {

        console.log("sa passe")
        console.log("le slide index "+slideIndex)
        
        if(slideIndex !== data.hist.length){

            console.log("longuer tableaux "+data.hist.length)
            setData(data)
            setSlideIndex(slideIndex + 1)
            setAfficheFin(afficheFin +1)
            setAfficheDebut(afficheDebut +1)

        } 
        else if (slideIndex === data.hist.length){

            console.log("slide a la fin")
            setData(data)
            setSlideIndex(5)
            setAfficheFin(5)
            setAfficheDebut(0)
            
        }
    }

    const prevSlide = () => {
           
        console.log("en arriere !")

        if(slideIndex !== 5){
            setData(data)
            setSlideIndex(slideIndex - 1)
            setAfficheFin(afficheFin -1)
            setAfficheDebut(afficheDebut -1)
        }
        else if (slideIndex === 1){
            setData(data)
            setSlideIndex(data.length)
        }
    }

    

    // je vais devoir ajouter un id a chaque image et( recuper l id de l image !)
    const detect =(e)=>{

      
        const i= e.currentTarget.id
         
      
        var objRef = document.body;
         var objchange=  objRef.style.backgroundImage= `url(${lienBase+data.hist[i].images.urlImageBack})`; 

         console.log(objchange)
     }

    

    
    
     console.log(data)


    // renvoie une map de data, obj et index , a chaque fois que la map sort une image il augmente la varibale index .
    // on appel dans <img le tableaux data[] avec la variable index a l'interieur , ainsi on appel dataslide[0] puis 1 , puis 2 et ect....
    return (
        
        <div className="caroucel">
            <button class="left" onClick={prevSlide}> {"<"} </button>

            
            {data.hist?.map((obj, index) => {

                if( index<afficheFin && index>=afficheDebut ){ 
                    {console.log(lienBase+data.hist[index].images.urlImage)}
                    return (
                    <div id={index} class="item" onMouseEnter={detect}>
                        <img src={lienBase+data.hist[index].images.urlImage} alt={"img"+(index)}  /> 
                    </div>
                             )
                    }       
               
            })}
            <button  class="right" onClick={nextSlide} >{">"}</button>
            
            <div>

            <button className="modal-toggle" onClick={toggleLoginForm}>
          Login
        </button> 
            <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Login"
        >
          <video>
            <source src="https://www.youtube.com/watch?v=Oi6tDIe-6aw"></source>
          </video>
        </Modal>
            </div>

            <style jsx="true">{`
        .App {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button.modal-toggle,
        input[type="submit"] {
          background-color: turquoise;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }

        button.modal-toggle:not(:first-child) {
          margin-left: 10px;
        }

        .form-group {
          margin-top: 10px;
        }

        input[type="text"],
        input[type="password"],
        input[type="email"] {
          box-sizing: border-box;
          width: 100%;
          padding: 0.5rem 0.7rem;
        }
      `}</style>
        </div>

    )


}

export default Corps