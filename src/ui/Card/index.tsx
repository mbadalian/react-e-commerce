import React from "react";
import { LuHeart, LuStar } from "react-icons/lu";
import Button from "../Button";
import "./index.css";

interface CardProps {
  imageSrc: string;
  title: string;
  price: number;
  description: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  price,
  description,
  rating,
}) => {
  let wholePricePart = price.toString().split(".")[0];
  let decimalPricePart = price.toString().split(".")[1];
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageSrc} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <div className="product-title-price-wrapper">
          <div className="product-title">{title}</div>
          <div className="product-price">
            <span className="product-price-span">$</span>
            {wholePricePart}
            <span className="product-price-span">
              .{decimalPricePart ? decimalPricePart : "00"}
            </span>
          </div>
        </div>
        <div className="product-description">{description}</div>
        <div className="product-rating-wrapper">
          <div className="product-rating">
            {[...Array(rating)].map((_, index) => (
              <LuStar className="product-star" key={index} />
            ))}
          </div>
          <div className="product-rating-total">(133)</div>
        </div>
        <div className="product-like-wrapper">
          <LuHeart size="20px" />
        </div>
        <Button label="Add to Cart" onClick={() => {}}></Button>
      </div>
    </div>
  );
};

export default Card;
