import React from 'react'
import { CartState } from '../context/Context1'
import SingleProducts from './SingleProducts'
import "./style.css"
import Filter from "./Filter"


const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchquery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "LowToHigh" ? (a.price - b.price) : (b.price - a.price)
      );
      console.log(sortedProducts)
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.FastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating >= byRating
      );
    }

    if (searchquery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchquery)
      );
    }

    return sortedProducts;
  };
    
  return (
    
    <div className="home">
      <Filter/>
      <div className="productContainer">
      {transformProducts().map((prod) => (
          <SingleProducts prod={prod} key={prod.id} />
        ))}
      </div>
      
    </div>
  )
}

export default Home