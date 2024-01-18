import Main from "./pages/Main/Main"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Toaster  } from 'react-hot-toast';

function App() {

  return (
    <>
     <GlobalStyle/>
     <Main/>
     {/* @ts-ignore */}
     <Toaster 
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        duration: 1000
      }}
    >
    </Toaster >
    </>
  )
}

export default App