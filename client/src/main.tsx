import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-image-gallery/styles/css/image-gallery.css"

import {Home} from "@/pages/Home/Home.tsx";
import {BuyPage} from "@/pages/Buy/Buy.tsx";
import {TestDrive} from "@/pages/TestDrive/TestDrive.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/buy",
        element: <BuyPage />
    },
    {
        path: "/testdrive",
        element: <TestDrive />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
