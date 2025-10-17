import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout";
import HomePage from "../pages/HomePage";
import ProjectDetails from "../component/ProjectDetails";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: HomePage,
        },
        {
          path: 'projects/:id',
          Component: ProjectDetails,
        }
    ]
  },
]);