import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Root from '../Pages/Root';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

export default router;