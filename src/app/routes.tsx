import { lazy } from 'react'
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Education = lazy(() => import("./pages/Education"));
const Works = lazy(() => import("./pages/Works"));
const Contact = lazy(() => import("./pages/Contact"));
import Layout from "./components/Layout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "experience", Component: Experience },
        { path: "skills", Component: Skills },
        { path: "education", Component: Education },
        { path: "works", Component: Works },
        // { path: "contact", Component: Contact },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: false,
    },
  }
);
