import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./pages/header/header";
import Home from "./pages/home";
import About from "./pages/about/about";
import Blogs from "./pages/blogs/blogs";
import SingleBlog from "./pages/blogs/single_blog/single-blog";
import CaseStudy from "./pages/case-study/case-study";
import ContactUs from "./pages/contact-us/contact-us";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLoader from "./pages/common/Loader/main-loader";
import ParentLayout from "./pages/layout";
import Service from "./pages/services/service";
import TermsCondition from "./pages/terms&condition/TermsCondition";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ParentLayout></ParentLayout>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/blog-content/:blogId/:category",
          element: <SingleBlog />,
        },
        {
          path: "/CaseStudy",
          element: <CaseStudy />,
        },
        {
          path: "/ContactUs",
          element: <ContactUs />,
        },
        {
          path: "/offer",
          element: <Service />,
        },
        {
          path: "/terms-condition",
          element: <TermsCondition />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },

        {
          path: "*",
          element: (
            <>
              <h1>404</h1>
            </>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
