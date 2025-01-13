import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"  
        autoClose={5000}     
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"  
      />
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
