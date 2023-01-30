import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Root } from "./pages/Root";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
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
