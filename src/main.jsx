import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './raw css file/Furnish.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import AboutMother from './about file/AboutMother';
import ContactUs from './contact file/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
      path: "/",
      element: <Home></Home>  ,
      },
      {
      path: "/AboutMother",
      element: <AboutMother></AboutMother>   ,
      },
      {
      path: "/contact",
      element: <ContactUs></ContactUs>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
