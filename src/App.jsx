import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LandingLayout from './layout/LandingLayout'


function App()
{

  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <>
      {/* <BrowserRouter> */}

      {
        pathname == "/"
          ? <LandingLayout />
          : <Layout >
            <div
              className="w-full">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home />} />

                <Route
                  path="*"
                  element={<Home />} />
              </Routes>
            </div>
          </Layout>
      }

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
