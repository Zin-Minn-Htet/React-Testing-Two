import React from "react";
import ParentCompo from "./Component/ParentCompo";
import { Routes, Route } from "react-router-dom"
import Home from "./Component/Pages/Home";
import Nav from "./Component/Uliti/Nav";
import Profile from "./Component/Pages/Profile";
import "./Style/App.css"
import LoginContextProviter from "./Component/Uliti/LoginContex";
import Cat from "./Component/Category/Cat";
import Allcat from "./Component/Category/Allcat";
import Editcat from "./Component/Category/Editcat";
import Createcat from "./Component/Category/Createcat";
import Fallback from "./Component/Uliti/Fallback";
import RouteGuard from "./Component/Uliti/RouteGuard";
import Login from "./Component/Pages/Login";
const LazyAbout = React.lazy(() => import('./Component/Pages/About'))

function App() {
  return (
    <div>
      <Nav />
      <LoginContextProviter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<React.Suspense fallback="Please Wait ..."  >{<LazyAbout />}</React.Suspense>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cats" element={<RouteGuard><Cat /></RouteGuard>}>
            <Route index element={<Allcat />} />
            <Route path="all" element={<Allcat />} />
            <Route path="edit/:id/:name" element={<Editcat />} />
            <Route path="create" element={<Createcat />} />
          </Route>
          <Route path="*" element={<Fallback />} />
        </Routes>
      </LoginContextProviter>
    </div>
  );
}

export default App;
