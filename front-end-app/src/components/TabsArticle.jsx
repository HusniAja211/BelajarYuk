import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import dummyData from "../dummydata/articleData";

const TabsArtikel = () => {
  const [activeTab, setActiveTab] = useState("foryou");

  const tabs = [
    { id: "foryou", label: "For You" },
    { id: "recommended", label: "Rekomendasi" },
    { id: "trending", label: "Trending" },
  ];

  return (
    <div className="mt-6">
      <div className="flex gap-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 px-4 font-semibold ${
              activeTab === tab.id ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {dummyData.map((item, index) => (
          <ArticleCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TabsArtikel;
