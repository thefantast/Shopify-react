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
    // and create the checkout

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

    //from componendDidMount we take the checkout id
    //this fetches the checkout

    fetchCheckout = (checkoutId) => {
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

    // closeCart = () => {
    //     this.setState({ isCartOPen: false })
    // }

    // openCart = () => {
    //     this.setState({ isCartOPen: true })
    // }

    closeCart = () => {
        this.setState({ isCartOpen: false });
      };
      openCart = () => {
        this.setState({ isCartOpen: true });
      };

    

    closeMenu = () => {}

    openMenu = () => {}

  render() {
      console.log(this.state.checkout)
      // in ShopContext.Provider we are passing the functions with the value
    return (
        
      <ShopContext.Provider 
        value={{...this.state,
            
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithHandle: this.fetchProductWithHandle,
                addItemtoCheckout: this.addItemtoCheckout,
                removeLineItem: this.removeLineItem,
                closeCart: this.closeCart,
                openCart: this.openCart,
                closeMenu: this.closeMenu,
                openMenu: this.openMenu


        }}>
            {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer;

export {ShopConsumer, ShopContext}


export default ShopProvider