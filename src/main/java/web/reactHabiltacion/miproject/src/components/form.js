import React from "react";

const Form = ({product, setProduct}) =>{
    const createProduct = (e) =>{
        const productData ={
            reference: e.target.elemnts.product_reference,
            brand:e.target.elemnts.product_brand,
            category:e.target.elemnts.product_category,
            name:e.target.elemnts.product_name,
            description:e.target.elemnts.product_description,
            price:e.target.elemnts.product_price,
            quantity:e.target.elemnts.product_quantity,
            photography: null
        }
        const request =await fetch("http://localhost:8080/api/product/new0",{
            method:"POST",
            headers:{
                "content-type":"aplication/json",
            },body: JSON.stringify

        }
    }

    return (
        <Form>
            <input type="text" id="product_reference" name="product_reference" className="input_Product"/>
            <input type="text" id="product_brand" name="product_brand" className="input_Product"/>
            <input type="text" id="product_category" name="product_category" className="input_Product"/>
            <input type="text" id="product_name" name="product_name" className="input_Product"/>
            <input type="text" id="product_description" name="product_description" className="input_Product"/>
            <input type="text" id="product_price" name="product_price" className="input_Product"/>
            <input type="text" id="product_quantity" name="product_quantity" className="input_Product"/>
            
        </Form>
    );
}