import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

type Router = ReturnType<typeof createBrowserRouter>;

type Props = {
  router: Router;
};
export const Providers = ({ router }: Props) => {
  return <RouterProvider router={router} />;
};
