import { createBrowserRouter } from "react-router-dom"
import App from '@/App'
import Layout from "@/components/layout.tsx";
import Notfound from "@/pages/error/notfound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:  <App/>
      },
      {
        path: "/albums",
        element:  <App/>
      },
      {
        path: "*",
        element:  <Notfound/>
      },
    ],
  },
]);