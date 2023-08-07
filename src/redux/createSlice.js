/*import { createSlice } from '@reduxjs/toolkit';
import { arrayWelcomProduits, ListourProducts } from '../Constant';




const productDetailsFromLoacaleStorage = localStorage.getItem("productDetails") !== null ?  JSON.parse(localStorage.getItem("productDetails")) : {}

const initialState = {
  itemActive : {},
  arrayWelcomProduits : arrayWelcomProduits ,
  produitInView : 1,
  ListourProducts : ListourProducts,
  productDetails : productDetailsFromLoacaleStorage,
  shoppingCarts : JSON.parse(window.localStorage.getItem("listshoppingcarts")) ? JSON.parse(window.localStorage.getItem("listshoppingcarts")) : [],
  formatData : {},
  checkoutMethode : {paymentMethode : "" , shippingMethode : ""}

};

const realEstateSlice = createSlice({
  name: 'realEstateredux',
  initialState,
  reducers: {

    handleNextProduit : (state) =>{
      state.produitInView = state.produitInView < state.arrayWelcomProduits.length ? state.produitInView + 1 : 1
    },
    handlePrevProduit : (state) =>{
      state.produitInView = state.produitInView > 1 ? state.produitInView - 1 : arrayWelcomProduits.length -1
    },

    changeNumProduit : (state , action) =>{
      state.produitInView = action.payload
      console.log(action.payload)
    },

    showProductDetails : (state , action) =>{
        state.productDetails = ListourProducts.find((item) => item.id === action.payload)
        window.localStorage.setItem("productDetails" , JSON.stringify(state.productDetails))
    },

    addToCart : (state , action) =>{
          let productAdded =  ListourProducts.find((item) => item.id === action.payload) 
          productAdded = {...productAdded  , quantity: 1}
          state.shoppingCarts =  [...state.shoppingCarts , productAdded]
          console.log(productAdded)
    },

    handleIncrementQti : (state, action)=>{
      state.shoppingCarts = state.shoppingCarts.map((item)=> item.id === action.payload ? {...item , quantity : item.quantity + 1 }: item)
      console.log(state.shoppingCarts)
    },


    handleDecrementQti : (state, action)=>{
      state.shoppingCarts = state.shoppingCarts.map((item)=> item.id === action.payload && item.quantity > 1 ? {...item , quantity : item.quantity - 1}: item)
      console.log(state.shoppingCarts)
    },

    removeProductAdded : (state , action) =>{
      state.shoppingCarts = state.shoppingCarts.filter((item)=> item.id !== action.payload)
    }
    ,
    addToLocaleStorege : (state)=>{
          window.localStorage.setItem("listshoppingcarts" , JSON.stringify(state.shoppingCarts))
          
    },
    handleSubmit : (state , action)=>{
      const refs = action.payload


      const formData = {
        customerName: refs.customerNameRef.current.value,
        email: refs.emailRef.current.value,
        phone: refs.phoneRef.current.value,
        streetAddress: refs.streetAddressRef.current.value,
        city: refs.cityRef.current.value,
        postalCode: refs.postalCodeRef.current.value,
        country: refs.countryRef.current.value,
        cardNumber: refs.cardNumberRef.current.value,
        expirationMonth: refs.expirationMonthRef.current.value,
        cvv: refs.cvvRef.current.value
        ,...state.checkoutMethode
      };
    },
    setCheckoutMethode :(state , action)=>{
          console.log("yes yes yes")   
    }

  },
});

export const itemActive = (state) => state.realEstateSlice.itemActive
export const produitInView = (state) => state.realEstateSlice.produitInView
export const productDetails = (state) => state.realEstateSlice.productDetails
export const shoppingCarts = (state) => state.realEstateSlice.shoppingCarts



export const {changeNumProduit , handleNextProduit , handlePrevProduit , showProductDetails , addToCart , handleIncrementQti , handleDecrementQti , removeProductAdded , addToLocaleStorege , handleSubmit , setCheckoutMethode}  = realEstateSlice.actions;

export default realEstateSlice;*/
