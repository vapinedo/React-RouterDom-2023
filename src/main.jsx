import './index.css'
import React from 'react'
import Root from './routes/root'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from './ErrorPage'
import Contact from "./routes/contact"

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
  { path: "contacts/:contactId", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
