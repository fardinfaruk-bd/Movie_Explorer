import { createBrowserRouter } from "react-router";
import Hero from "../pages/Hero";
import RootLayout from "../Layout/RootLayout";

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


