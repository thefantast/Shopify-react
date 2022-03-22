import React, {useContext} from 'react';
import {Box, Icon, Image, Text, Flex} from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext';
import {MdMenu, MdShoppingBasket} from 'react-icons/md';


const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)

    // we change the divs to box. that allows us to implement the chakra ui stylings

  return (
    <Flex backgroundColor="#FFA8E2" flexDir="row" justifyContent="space-between" p="2rem">
        <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30}></Icon>
        <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540" w={100} h={100}/>
        <Icon fill="white" cursor="pointer" onClick={() => openCart()} as={MdShoppingBasket} w={30} h={30}></Icon>
    </Flex>
  )
}

export default NavBar