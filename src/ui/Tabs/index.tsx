import React, { useState } from "react";

import "./index.css";

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-titles">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-title ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-contents">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-content ${activeTab === index ? "active" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
