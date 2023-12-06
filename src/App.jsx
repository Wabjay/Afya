import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";


function App() {



  return (
 
     
        <React.Fragment>          
            <BrowserRouter>
            <Layout >
              <div className="w-full">
              <Routes>
                <Route exact path="/" element={<Home />} />
               
                {/* <Route exact path="/project/:id" element={<Project />} /> */}
                <Route path="*" element={<Home />} />
              </Routes>
                </div>
                </Layout>
            </BrowserRouter>
          
        </React.Fragment>
  );
}
 
export default App;
