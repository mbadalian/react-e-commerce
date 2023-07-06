import React, { useState, ReactElement, ReactNode } from 'react';

import "./index.css";

export interface TabProps {
    id: string;
    title: string;
    active?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
}

export const Tab: React.FC<TabProps> = ({ title, active, onClick }) => {
    return (
        <div className={`tab-title ${active ? "active" : ""}`} onClick={onClick}>
           {title}
        </div>
    );
};

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children) as React.ReactElement[];
  const [activeTab, setActiveTab] = useState(childrenArray[0].props.id);

  return (
    <div className="tabs">
      <div className="tab-titles">
          {childrenArray.map((child: ReactElement<TabProps>) => {
              const { id } = child.props;
              const active = id === activeTab;

              return (
                  React.cloneElement(child, {
                      active,
                      onClick: () => setActiveTab(id),
                  })
              );
          })}
      </div>
      <div className="tab-contents">
          {childrenArray.map((child: ReactElement<TabProps>) => {
              const { children, id, title } = child.props;

              if (!children) return null;

              return <div
                  key={id + title}
                  className={`tab-content ${activeTab === id ? "active" : ""}`}
              >
                  {children}
              </div>
          })}
      </div>
    </div>
  );
};
