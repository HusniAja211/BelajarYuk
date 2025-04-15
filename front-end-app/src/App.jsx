import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";  
import Register from "./pages/Register";
import NotFound from "./pages/404";
import Study from "./pages/Study";
import Save from "./pages/Save";
import Article from "./pages/Article";
import ChatAi from "./pages/ChatAi";
import ArticleDetail from "./pages/ArticleDetail"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/save" element={<Save />} />
        <Route path="/article" element={<Article />} />
        {/* <Route path="/articleDetail" element={<ArticleDetail />} />  */}
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/chatai" element={<ChatAi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
