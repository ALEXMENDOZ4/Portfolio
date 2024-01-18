import React, { useEffect, useRef, useState } from 'react';
import * as sc from './styles';
import toast from 'react-hot-toast';
import { useToasterStore } from 'react-hot-toast';
import emailjs from "@emailjs/browser";
import GridLoader from "react-spinners/GridLoader";

const Contact = () => {

  const useForm = useRef<any>();
  const { toasts } = useToasterStore();
  const [loading, setloading] = useState(false);
  const TOAST_LIMIT = 1

  const urls = {
    serviceID: import.meta.env.VITE_APP_SERVICE,
    templateID: import.meta.env.VITE_APP_TEMPLATE,
    apiKey: import.meta.env.VITE_APP_KEY,
  }

  // Enforce Limit
  useEffect(() => {
    toasts
      .filter((t: any) => t.visible) // Only consider visible toasts
      .filter((_, i: any) => i >= TOAST_LIMIT) // Is toast index over limit
      .forEach((t: any) => toast.dismiss(t.id)) // Dismiss – Use toast.remove(t.id) removal without animation
  }, [toasts]);

  const send = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setloading(!loading);

    const serviceID = urls.serviceID;
    const templateID = urls.templateID;
    const apiKey = urls.apiKey;

    emailjs.sendForm(serviceID,templateID,useForm.current, apiKey).then((result: any)=>{
      setloading(false);
      console.log(result);
      toast.success('Datos enviados!');
      useForm.current.reset();
    }).catch((error)=> {
      setloading(false);
      console.log(error);
      toast.error('Ocurrio un error, vuelva intentarlo');
      // useForm.current.reset();
    });
  }

  return (
    <>
      {loading && <sc.Loading><GridLoader color="#13bbff" margin={8}/></sc.Loading>}
      <sc.Contact className='contact' id='contact'>
        <div className='center-text'>
            <h2>Contact <span>Me</span></h2>
        </div>
        <div className='contact-form'>
          <form ref={useForm} onSubmit={(e)=>send(e)}>
            <input name='name' type="text" placeholder='Your name' required/>
            {/* <input name='email' type="email" placeholder='Email Address..' required/> */}
            <textarea name="message" id="" cols={30} rows={10} placeholder='Write Message Here...' required></textarea>
            <input type="submit" name='' value="Send Message" className='send-btn'/>
          </form>
        </div>
      </sc.Contact>
    </>
  )
}

export default Contact;