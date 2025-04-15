import React from "react";
import Navbar from "../components/Navbar";
import TabsArtikel from "../components/TabsArticle";

const Article = () => {
    return(
        <>
        <Navbar />
        <main className="bg-[#e6f3ff] min-h-screen px-8 py-6">
            <TabsArtikel />
        </main>
        </>
    );
};

export default Article;