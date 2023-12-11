import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LandingLayout from "./layout/LandingLayout";
import Create from "./pages/CreateRecord";
import Edit from "./pages/EditRecord";
import Auth from "./app/auth"

function App() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      {/* <BrowserRouter> */}

      {pathname == "/" ? (
        <LandingLayout />
      ) : (
        <Layout>
          <div className="w-full">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/auth" element={<Auth />} />

              <Route path="*" element={<Home />} />

              <Route exact path="/createrecord" element={<Create />} />
              <Route exact path="/editrecord" element={<Edit />} />
            </Routes>
          </div>
        </Layout>
      )}

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
