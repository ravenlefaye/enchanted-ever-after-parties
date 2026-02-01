import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './layout/home/Home';
import RouteError from './utils/errors/route-error/RouteError';
import './App.css'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
        errorElement: <RouteError/>,
      },
    ],
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