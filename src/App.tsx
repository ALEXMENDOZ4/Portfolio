import { useEffect } from "react";
import Main from "./pages/Main/Main"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Toaster  } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000
    });
  },[]);

  return (
    <>
     <GlobalStyle/>
     <Main/>
     <Toaster 
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        duration: 1000
      }}
    />
    </>
  )
}

export default App