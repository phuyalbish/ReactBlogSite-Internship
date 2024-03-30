import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import Writer from "./pages/Writer";
import Category from "./pages/Category";
import WriterPosts from "./pages/WriterPosts";
import CategoryPosts from "./pages/CategoryPosts";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Logout from "./pages/Logout";
import PostDelete from "./pages/PostDelete";
import PostDetails from "./pages/PostDetails";
import PostEdit from "./pages/PostEdit";
import PostCreate from "./pages/PostCreate";
import SignUpPage from "./pages/SignUpPage";
import UserProfilePage from "./pages/UserProfilePage";
import ErrorPage from "./pages/ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "writer", element: <Writer /> },
      { path: "profile/:id", element: <UserProfilePage /> },
      { path: "posts/:id", element: <PostDetails /> },
      { path: "create", element: <PostCreate /> },
      { path: "posts/:id/edit", element: <PostEdit /> },
      { path: "posts/:id/delete", element: <PostDelete /> },
      { path: "posts/categories/:id", element: <CategoryPosts /> },
      { path: "posts/writer/:id", element: <WriterPosts /> },
      { path: "dashboard/:id", element: <Dashboard /> },
      { path: "logout", element: <Logout /> },
      { path: "category", element: <Category /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
