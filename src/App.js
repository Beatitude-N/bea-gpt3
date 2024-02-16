import React from "react";
import { Blog, Features, Footer, Header, WhatGPT3, Possibility } from "./containers";
import { Article, Brand, CTA, Feature, Navbar } from "./components";

function App() {
  return (
   <div className="App">
    <div className="gradient_bg">
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
   </div>
       
  
  );
}

export default App;
