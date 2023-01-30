import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Root } from "./pages/Root";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <div>Cart</div>,
      },
      {
        path: "/success",
        element: <div>Success</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
