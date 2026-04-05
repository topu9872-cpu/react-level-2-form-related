import React from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagment = () => {

const handleProductSubmit=e=>{
    e.preventDefault();
    const name=e.target.name.value;
    const price=e.target.price.value;
    const quantity=e.target.quantity.value;
    // console.log(name, price,quantity);
    const newProduct={
        name,
        price,
        quantity
    }
    console.log(newProduct);
}



    return (
        <div>
            <h2>Add a Product</h2>
<form onSubmit={handleProductSubmit}>
    <input type="text"  name='name' placeholder='Product Name' /><br/>
    <input type="text"  name='price' placeholder='Product Price' /><br/>
<input type="text"  name='quantity' placeholder='Product Quantity' /><br/>
<input type="submit" value='Submit' />
</form>








<ProductTable></ProductTable>
<ProductForm></ProductForm>

        </div>
    );
};

export default ProductManagment;