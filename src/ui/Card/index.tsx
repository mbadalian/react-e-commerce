import React, { useState } from "react";
import { LuHeart, LuStar } from "react-icons/lu";

import { Button } from "../Button";

import "./index.css";

export interface CardProps {
  imageSrc: string;
  title: string;
  price: number;
  description: string;
  rating: number;
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  price,
  description,
  rating,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleAddClick = () => {
    setIsAdded(!isAdded);
  };

  const priceSplitted = price.toString().split(".");
  const wholePricePart = priceSplitted[0];
  const decimalPricePart = priceSplitted[1];
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageSrc} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <div className="product-title-price-wrapper">
          <div className="product-title">{title}</div>
          <div className="product-price">
            ${wholePricePart}
            <span className="product-price-span">
              .{decimalPricePart ? decimalPricePart : "00"}
            </span>
          </div>
        </div>
        <div className="product-description">{description}</div>
        <div className="product-rating-wrapper">
          <div className="product-rating">
            {[...Array(rating)].map((_, index) => (
              <LuStar className="product-star-icon" key={index} />
            ))}
            (133)
          </div>
        </div>
        <button className="product-like-button" onClick={handleLikeClick}>
          <LuHeart
            className={`product-like-icon ${
              isLiked ? "product-like-icon-filled" : ""
            }`}
            size="20px"
          />
        </button>
        <Button
          variant={isAdded ? "contained" : "outlined"}
          label={isAdded ? "Remove from Cart" : "Add to Cart"}
          onClick={handleAddClick}
        />
      </div>
    </div>
  );
};
