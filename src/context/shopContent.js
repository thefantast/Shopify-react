import React, { Component } from 'react'
import Client from 'shopify-buy';


const ShopContext = React.createContext();

//connection to the shopify
const client = Client.buildClient({
    storefrontAccessToken:'03d2b56af8deca447b2d3773eb50512f',
    domain: 'thephantasts.myshopify.com'
    
})

export class ShopProvider extends Component {


    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false
    }

    // get the checkout initiale when we first load the application

    componentDidMount() {
        if(localStorage.checkout_id) {
            this.fetchCheckout(localStorage.checkout_id)
        } else {
            this.createCheckout();
        }
         
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout_id", checkout.id)
        this.setState({checkout: checkout})

    }

    fetchCheckout = async (checkoutId) => {
        client.checkout
        .fetch(checkoutId)
        .then((checkout) => {
            this.setState({checkout: checkout})
        })

    }

    addItemtoCheckout = async () => {

    }

    removeLineItem = async (lineItemIdsToRemove) => {

    }

    fetchAllProducts = async () => {
        // Fetch all products in your shop
        const products = await client.product.fetchAll();
        this.setState({products: products}) 
  

    }

    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle)
        this.setState({product: product})
    }

    closeCart = () => { }

    openCart = () => {}

    closeMenu = () => {}

    openMenu = () => {}

  render() {
      console.log(this.state.checkout)
    return (
      <ShopContext.Provider>
            {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer;

export {ShopConsumer, ShopContext}


export default ShopProvider