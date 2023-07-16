import React, { useState } from "react";
import { LuChevronDown, LuPhone } from "react-icons/lu";

import "./index.css";

export interface SectionProps {
  phoneNumber: string;
  logo: string;
  languages: string[];
  locations: string[];
}

export const Header: React.FC<SectionProps> = ({
  phoneNumber,
  logo,
  languages,
  locations,
}) => {
  const [isLangOpen, setLangOpen] = useState(false);
  const [isLocOpen, setLocOpen] = useState(false);

  const toggleLangDropdown = () => setLangOpen(!isLangOpen);
  const toggleLocDropdown = () => setLocOpen(!isLocOpen);

  return (
    <div>
      <div className="header-wrapper">
        <div className="header">
          <div className="header-contacts">
            <LuPhone size="16px" />
            <span className="header-contacts-phone ">{phoneNumber}</span>
          </div>
          <span className="header-item">
            Get 50% Off on Selected Items | Shop Now
          </span>
          <div className="header-menu">
            <div
              className="header-toggle-dropdown"
              onClick={toggleLangDropdown}
            >
              EN
              <LuChevronDown size="20px" />
            </div>
            {isLangOpen && (
              <div className="header-dropdown-menu">
                <a href="#" className="header-dropdown-menu-item">
                  EN
                </a>
                <a href="#" className="header-dropdown-menu-item">
                  DE
                </a>
                <a href="#" className="header-dropdown-menu-item">
                  FR
                </a>
              </div>
            )}
            <div className="header-toggle-dropdown" onClick={toggleLocDropdown}>
              Europe
              <LuChevronDown size="20px" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-navbar">
        <img src="logo.svg" alt="logo" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <select style={{ marginRight: "20px" }}>
            <option value="category">Category</option>
          </select>
          <span style={{ marginRight: "20px" }}>Deals</span>
          <span style={{ marginRight: "20px" }}>What's new</span>
          <span style={{ marginRight: "20px" }}>Delivery</span>
          <input
            type="text"
            placeholder="Search"
            style={{ marginRight: "20px" }}
          />
          <span style={{ marginRight: "20px" }}>Account</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};
