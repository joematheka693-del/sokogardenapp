import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';

const Addproducts = () => {

  // Introduce the hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  // Declare the additional hooks to manage the state o the application
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Create a function that will handle the action
  const handleSubmit = async (e) => {
    // Prevent the site from reloading
    e.preventDefault()

    // setLoading hook with a message (activate it)
    setLoading(true)
    try{
      // Create a form data
      const formdata = new FormData()

      // Append the details to the form data created
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      // Interact with axios module that will help connect to the https protocal[POST].
      const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/add_product", formdata)

      // Set back the loading to default
      setLoading(false);

      // Update the 
      setSuccess(response.data.message)

      // Clear your hooks(Setting them back to default/empty)
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");

    }
    catch(error){
      // set the loading back to default
      setLoading("");

      // Update the error hook with the message given back from the response
      setError(error.message)
    }
  }


  return (
    <div className='row justify-content-center mt-4'>
      
      <div className="col-md-6 p-4 card shadow">
        <h3>Welcome to Add Product</h3>

        {/* Bind the loading hook */}
        {loading && <Loader />}

        <h3 className="text-success"> {success} </h3>

        <h4 className="text-danger"> {error} </h4>

        <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Enter the Product Name'
        className='form-control'
        required 
        value={product_name}
        onChange={(e) => setProductName(e.target.value)}/> <br />

        {/* {product_name} */}

        <input type="text" 
        placeholder='Enter the product description'
        className='form-control'
        required 
        value={product_description}
        onChange={(e) => setProductDescription(e.target.value)}/> <br />

        {/* {product_description} */}

        <input type="number"
        placeholder='Enter the price of the product'
        className='form-control'
        required
        value={product_cost}
        onChange={(e) => setProductCost(e.target.value)} /> <br />

        {/* {product_cost} */}

        <label className='text-primary'>Product Photo</label> <br />
        <input type="file"
        className='form-control'
        required 
        accept='image/*'
        onChange={(e) => setProductPhoto(e.target.files[0])}/> <br />
         
        <input type="submit" 
        value="Add Product"
        className='btn btn-outline-primary' 
        />
      </form>
      </div>

    </div>
  )
}

export default Addproducts;
