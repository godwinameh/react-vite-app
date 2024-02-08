import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExamQuestion from './assets/Components/ExamQuestion.jsx';
import LeaderBoard from './assets/Components/LeaderBoard.jsx';
import Home from './assets/Components/Home.jsx'

const router = createBrowserRouter([
  {  path: "/",  element: <Home />, },
  {  path: "/ExamQuestion",  element: <ExamQuestion />, },
  {  path: "/LeaderBoard",  element: <LeaderBoard />, },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <RouterProvider router={router} />
  </React.StrictMode>,
)
