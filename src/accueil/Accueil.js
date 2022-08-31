import { useForm } from "react-hook-form";
import Navigation from '../Nav/index.js';


const Accueil = () =>{

    const { register,handleSubmit } = useForm({
      defaultValues: {
          username: '',
          email: '',
          password: '',
      }
    });


    const onSubmit = data => data;




  return (
    <div >
         <form  className="FaqForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputFaq">

        <div><h1>Films, séries et bien plus en illimité.</h1></div>

        <div><h2>Où que vous soyez. Annulez à tout moment.</h2></div>

         <input type="email"  name="email" value="" tabindex="0" autocomplete="email" maxlength="50" minlength="5" dir=""  {...register("email")}/>

         <button className="ButtonFaQ" type="submit">
                   inscription !
                </button>
          </div>
         </form>
         </div>
  );

}
export default Accueil