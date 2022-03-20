import React, {useContext} from 'react';
import {Box, Icon, Image, Text, Flex} from '@chakra-ui/react'
import {ShopContext} from '../context/shopContext';
import {MdMenu, MdShoppingBasket} from 'react-icons/md';


const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)

    // we change the divs to box. that allows us to implement the chakra ui stylings

  return (
    <Flex backgroundColor="#FFA8E2" flexDir="row" justifyContent="space-between" p="2rem">
        <Icon fill="white" as={MdMenu}></Icon>
        <Text>Logo</Text>
        <Text>Cart</Text>
    </Flex>
  )
}

export default NavBar