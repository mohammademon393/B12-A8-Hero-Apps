import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Root from '../Root/Root';
import Install from '../Pages/Install';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=> fetch('TreandingData.json'),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: ()=> fetch('/AllApps.json')
      },
      {
        path: "/install",
        Component: Install,
      },
    ],
  },
]);

export default router;