import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/Layout';
import Writer from './pages/Writer';
import WriterPosts from './pages/WriterPosts';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import Logout from './pages/Logout';
// import PostDelete from './pages/PostDelete';
import PostDetails from './pages/PostDetails';
import PostEdit from './pages/PostEdit';
// import PostCreate from './pages/PostCreate';
import Posts from './components/Posts';
import SignUpPage from './pages/SignUpPage';
import UserProfilePage from './pages/UserProfilePage';
import ErrorPage from './pages/ErrorPage';


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  errorElement: <ErrorPage/>,
  children:[
    {index: true, element: <HomePage/>},
    {path: "signup", element: <SignUpPage/>},
    // {path: "login", element: <LoginPage/>},
    {path: "writer", element: <Writer/>},
    {path: "profile/:id", element: <UserProfilePage/>},
    {path: "posts/:id", element: <PostDetails/>},
    // {path: "create", element: <PostCreate/>},
    {path: "posts/:id/edit", element: <PostEdit/>},
    {path: "posts/categories/:id", element: <Categories/>},
    {path: "posts/writer/:id", element: <WriterPosts/>},
    {path: "dashboard/:id", element: <WriterPosts/>},
    // {path: "logout", element: <Logout/>},
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

