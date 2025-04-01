import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { productId } = useParams();
  const ProductDetail = products.find((p) => p.id === productId);

  if (!ProductDetail) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">{ProductDetail.name}</h1>
      <p className="text-gray-700 mb-4">{ProductDetail.description}</p>
      <p className="text-gray-500">Product ID: {ProductDetail.id}</p>
    </div>
  );
};

export default ProductDetail;