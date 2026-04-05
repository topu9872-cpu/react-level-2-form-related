import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagment = () => {

const [products, setProducts] =useState([]);


const handleAddProducts = newProduct=>{
    const newProducts =[...products, newProduct];
    setProducts(newProducts);
}


  return (
    <div>

      
      <ProductForm handleAddProducts={handleAddProducts}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagment;
