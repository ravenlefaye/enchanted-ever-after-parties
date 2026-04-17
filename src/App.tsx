import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './layout/contact/Contact';
import RouteError from './utils/errors/route-error/RouteError';
import './App.css'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Contact/>,
    errorElement: <RouteError/>,
  },
]);



function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;