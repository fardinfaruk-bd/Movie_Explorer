import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Hero from "../pages/Homepage/Hero";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Hero,
            }
        ]
    }
  ]
);


