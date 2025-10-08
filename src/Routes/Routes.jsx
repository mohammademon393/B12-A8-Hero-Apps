import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import App from '../Pages/App';
import Root from '../Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            path: "/",
            Component: Home
        },
      {
        path: "/app",
        Component: App
      },
    ],
  },
]);

export default router;