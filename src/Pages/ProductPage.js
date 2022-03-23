import React, {useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom';
import {Box, Grid, Image, Text, Button, Heading, Flex, Center} from '@chakra-ui/react';

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
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
          <Image src={product.images[0].src} />
          <Box>
            <Heading>
              {product.title}
            </Heading>
            <Text>{product.variants.price}</Text>
            <Text>{product.description}</Text>
            <Button
              onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            >
            Add to Cart
            </Button>

          </Box>
      </Grid>
        
    </Box>
  )
}

export default ProductPage