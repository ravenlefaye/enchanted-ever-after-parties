import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './layout/about/About';
import BubbleShows from './layout/bubble-shows/BubbleShows';
import CharPerformance from './layout/char-performance/CharPerformance';
import Contact from './layout/contact/Contact';
import FacePainting from './layout/face-painting/FacePainting';
import Home from './layout/home/Home';
import Layout from './layout/Layout';
import RouteError from './utils/errors/route-error/RouteError';
import ToddlerParties from './layout/toddler-parties/ToddlerParties';
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
      {
        path: '/contact',
        element: <Contact/>,
        errorElement: <RouteError/>,
      },
      {
        path: '/about',
        element: <About/>,
        errorElement: <RouteError/>,
      },
      {
        path: '/facepainting',
        element: <FacePainting/>,
        errorElement: <RouteError/>,
      },
      {
        path: '/charperformance',
        element: <CharPerformance/>,
        errorElement: <RouteError/>,
      },
      {
        path: '/bubbleshows',
        element: <BubbleShows/>,
        errorElement: <RouteError/>,
      },
      {
        path: '/toddlerparties',
        element: <ToddlerParties/>,
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