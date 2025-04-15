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
import Search from "./pages/Search";
import CourseChapter from "./pages/CourseChapter";
import CourseContent from "./pages/CourseContent";
import Video from "./pages/Video";
import WatchVideo from "./pages/WatchVideo";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Pages Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/video" element={<Video />} />
        <Route path="/video/:id" element={<WatchVideo />} />
        <Route path="/save" element={<Save />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/chatai" element={<ChatAi />} />
        <Route path="/search" element={<Search />} />

        {/* Course Routes */}
        <Route path="/course/:id/chapters" element={<CourseChapter />} />
        <Route path="/course/:id/chapter/:chapterId" element={<CourseContent />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
