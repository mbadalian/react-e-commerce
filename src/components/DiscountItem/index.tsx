import React from "react";

import "./index.css";

export interface DiscountItemProps {
  image: string;
  title: string;
  price: number;
  description: string;
  color: string;
  background: string;
}

export const DiscountItem: React.FC<DiscountItemProps> = ({
  image,
  title,
  price,
  description,
  color,
  background,
}) => {
  return (
    <div className="discount-item" style={{ backgroundColor: background }}>
      <div className="get-discount-content">
        <h3 className="discount-title">{title}</h3>
        <div className="discount-price" style={{ color: color }}>
          <span className="discount-price-text-span">$</span>
          {price}
        </div>
        <div className="discount-paragraph">{description}</div>
      </div>
      <div className="discount-thumbnail-wrap">
        <img src={image} loading="lazy" alt="" className="discount-image" />
      </div>
    </div>
  );
};
