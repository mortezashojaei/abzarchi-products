import React from "react";
import { configs } from "../../configs";

export const Products = ({ products = [] }) => {
  return (
    <div>
      {products.map((item) => (
        <a target="_blank" href={`${configs.PRODUCTS_BASE_URL}${item.slug}`}>
          <h3>{item.name}</h3>
          <p dangerouslySetInnerHTML={{ __html: item.short_description }} />
        </a>
      ))}
    </div>
  );
};
