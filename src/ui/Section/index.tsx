import React from "react";
import "./index.css";

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h3 className="section-title">{title}</h3>
      <div>{children}</div>
    </section>
  );
};
