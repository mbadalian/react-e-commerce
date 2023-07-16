import React, { useEffect, useRef, useState } from "react";
import {
  LuChevronDown,
  LuPhone,
  LuSearch,
  LuShoppingCart,
  LuUser,
} from "react-icons/lu";

import "./index.css";

export interface HeaderProps {
  phoneNumber: string;
  logo: string;
  languages: string[];
  locations: string[];
}

export const Header: React.FC<HeaderProps> = ({
  phoneNumber,
  logo,
  languages,
  locations,
}) => {
  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleLanguageDropdown = () => setLanguageOpen(!isLanguageOpen);
  const toggleLocationDropdown = () => setLocationOpen(!isLocationOpen);
  const toggleCategoryDropdown = () => setCategoryOpen(!isCategoryOpen);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLanguageOpen(false);
        setLocationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
            <div className="header-dropdown-wrapper" ref={dropdownRef}>
              <div
                className="header-toggle-dropdown"
                onClick={toggleLanguageDropdown}
              >
                EN
                <LuChevronDown
                  size="20px"
                  style={isLanguageOpen ? { transform: "rotate(180deg)" } : {}}
                />
              </div>
              {isLanguageOpen && (
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
            </div>
            <div className="header-dropdown-wrapper" ref={dropdownRef}>
              <div
                className="header-toggle-dropdown"
                onClick={toggleLocationDropdown}
              >
                EU
                <LuChevronDown
                  size="20px"
                  style={isLocationOpen ? { transform: "rotate(180deg)" } : {}}
                />
              </div>
              {isLocationOpen && (
                <div className="header-dropdown-menu">
                  <a href="#" className="header-dropdown-menu-item">
                    EU
                  </a>
                  <a href="#" className="header-dropdown-menu-item">
                    US
                  </a>
                  <a href="#" className="header-dropdown-menu-item">
                    CIS
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="header-navbar">
        <div className="header-navbar-content">
          <img src={logo} alt="logo" />
          <div className="header-navbar-items">
            <ul className="header-navbar-list">
              <li
                className="header-navbar-list-item category"
                onClick={toggleCategoryDropdown}
              >
                Category
                <LuChevronDown
                  size="20px"
                  style={isCategoryOpen ? { transform: "rotate(180deg)" } : {}}
                />
                {isCategoryOpen && (
                  <nav className="header-navbar-dropdown">
                    <a href="#" className="header-navbar-dropdown-title">
                      Popular Categories
                    </a>
                    <ul className="header-navbar-dropdown-list">
                      <li className="header-navbar-dropdown-list-item">
                        <a
                          href="#"
                          className="header-navbar-dropdown-list-item-link"
                        >
                          <img
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png"
                            alt=""
                            className="header-navbar-dropdown-list-item-image"
                          />
                          <div>
                            <div className="header-navbar-dropdown-list-item-heading">
                              Furniture
                            </div>
                            <div className="header-navbar-dropdown-list-item-description">
                              240 &nbsp;Item &nbsp;Available
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="header-navbar-dropdown-list-item">
                        <a
                          href="#"
                          className="header-navbar-dropdown-list-item-link"
                        >
                          <img
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png"
                            alt=""
                            className="header-navbar-dropdown-list-item-image"
                          />
                          <div>
                            <div className="header-navbar-dropdown-list-item-heading">
                              Hand Bag
                            </div>
                            <div className="header-navbar-dropdown-list-item-description">
                              240 &nbsp;Item &nbsp;Available
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="header-navbar-dropdown-list-item">
                        <a
                          href="#"
                          className="header-navbar-dropdown-list-item-link"
                        >
                          <img
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png"
                            alt=""
                            className="header-navbar-dropdown-list-item-image"
                          />
                          <div>
                            <div className="header-navbar-dropdown-list-item-heading">
                              Shoe
                            </div>
                            <div className="header-navbar-dropdown-list-item-description">
                              240 &nbsp;Item &nbsp;Available
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="header-navbar-dropdown-list-item">
                        <a
                          href="#"
                          className="header-navbar-dropdown-list-item-link"
                        >
                          <img
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png"
                            alt=""
                            className="header-navbar-dropdown-list-item-image"
                          />
                          <div>
                            <div className="header-navbar-dropdown-list-item-heading">
                              Headphone
                            </div>
                            <div className="header-navbar-dropdown-list-item-description">
                              240 &nbsp;Item &nbsp;Available
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="header-navbar-dropdown-list-item">
                        <a
                          href="#"
                          className="header-navbar-dropdown-list-item-link"
                        >
                          <img
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png"
                            alt=""
                            className="header-navbar-dropdown-list-item-image"
                          />
                          <div>
                            <div className="header-navbar-dropdown-list-item-heading">
                              Laptop
                            </div>
                            <div className="header-navbar-dropdown-list-item-description">
                              240 &nbsp;Item &nbsp;Available
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="header-navbar-dropdown-list-item">
                        <a
                          href="#"
                          className="header-navbar-dropdown-list-item-link"
                        >
                          <img
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png"
                            alt=""
                            className="header-navbar-dropdown-list-item-image"
                          />
                          <div>
                            <div className="header-navbar-dropdown-list-item-heading">
                              Book
                            </div>
                            <div className="header-navbar-dropdown-list-item-description">
                              240 &nbsp;Item &nbsp;Available
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                )}
              </li>
              <li className="header-navbar-list-item">Deals</li>
              <li className="header-navbar-list-item">What's new</li>
              <li className="header-navbar-list-item">Delivery</li>
              <li className="header-navbar-list-item">
                <form action="/search" className="search-form">
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Search Product"
                  />
                  <div className="search-button">
                    <LuSearch size="16px" />
                  </div>
                </form>
              </li>
            </ul>
          </div>
          <div className="header-navbar-buttons">
            <a href="#" className="header-navbar-button">
              <LuUser size="16px" />
              <div className="header-navbar-button-title">Account</div>
            </a>
            <a href="#" className="header-navbar-button">
              <LuShoppingCart size="16px" />
              <div className="header-navbar-button-title">Cart</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
