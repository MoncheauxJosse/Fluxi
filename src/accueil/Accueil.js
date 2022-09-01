import { useForm } from "react-hook-form";
import Navigation from '../Nav/index.js';
import './Accueil.css';
import { Link, useNavigate} from "react-router-dom"


const Accueil = () =>{

  const navigate = useNavigate();
    const { register,handleSubmit } = useForm({
      defaultValues: {
          email: '',
      }
    });


    const onSubmit = () =>{navigate('/signup')}



  return (
    <div >
         <form  className="FaqForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputFaq">

        <div><h1>Films, séries et bien plus en illimité.</h1></div>

        <div><h2>Où que vous soyez. Annulez à tout moment.</h2></div>

        <input className="InputForm" type="text" name="email" placeholder="Email Address" {...register("email")}/>

         <button className="ButtonFaQ" type="submit">inscription !</button>

         
          </div>
         </form>
         </div>
  );

}
export default Accueil