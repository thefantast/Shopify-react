import React, {useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom';

import {ShopContext} from '../context/shopContext';

const ProductPage = () => {

    //look what useParams is exactly

    let {handle} = useParams();

    //note what that is
    const {fetchProductWithHandle, addItemToCheckout, product, products } = useContext(ShopContext)

    // import all the variable thats depending on
    // when ever the handle changes the funtion gets re invoked
    // useEffect will grab the products
    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if(!product.title) return <div>Loading...</div>

  return (
    <div>
        <h1>{product.title}</h1>
    </div>
  )
}

export default ProductPage