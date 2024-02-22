import Browse from "./Browse";
import Login from "./Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Main;
