import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import './App.css'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [],
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