import React, { createContext, useContext, useReducer } from 'react'
import {faker} from "@faker-js/faker"
import { cartReducer, productReducer } from './Reducers1';

const Cart = createContext();
faker.seed(99);

const Context1 = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    image:faker.image.city(500, 500, true),
    price:faker.datatype.float({ max: 100 }),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    FastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  console.log(products)

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const[productState,productDispatch] =useReducer(productReducer,{
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searQuery:"",
  })

  return (
    <Cart.Provider value={{state,dispatch,productState,productDispatch}} >
        {children}
    </Cart.Provider>
  )
  }


export default Context1

export const CartState =()=>{
    return useContext(Cart);
}
