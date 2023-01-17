import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";

export const primaryRoute = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>
      },
      {
        path: 'productos',
        element: <h1>Productos</h1>
      },
      {
        path: 'servicios',
        element: <h1>Servicios</h1>
      },
      {
        path: 'nosotros',
        element: <h1>Nosotros</h1>
      },
      {
        path: 'contacto',
        element: <h1>Contacto</h1>
      }
    ]
  }
]);
