import './index.css'
import React from 'react'
import Root, { 
  loader as rootLoader, 
  action as rootAction,
  loader as contactLoader

} from './routes/root'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from './ErrorPage'
import Contact from "./routes/contact"

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Root />, 
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { 
        path: "contacts/:contactId", 
        element: <Contact />,
        loader: contactLoader
      },
    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
