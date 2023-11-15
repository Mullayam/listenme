import { createBrowserRouter } from "react-router-dom"
import App from '@/App'
import Layout from "@/components/layout.tsx";
import Notfound from "@/pages/error/notfound";
import DisplayAlbum from "@/pages/displayAlbums";
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
        path: "/album/:albumName",
        element:  <DisplayAlbum/>
      },
      {
        path: "*",
        element:  <Notfound/>
      },
    ],
  },
]);