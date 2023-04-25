import React from 'react'
import {Card,Button} from "react-bootstrap"
import Rating from './Rating'
import { CartState } from '../context/Context1'

const SingleProducts = ({prod}) => {
const {state:{cart},dispatch} =  CartState()
  return (
  <div className='products'>
    <Card style={{ width: '18rem' }}> 
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle style={{paddingBottom:10}}>
          <span>$ {prod.price}</span>
          {prod.FastDelivery?(
            <div>Fast Delievery</div>
          ):(
            <div>4 day delievery</div>
          )}
          <Rating rating={prod.rating}/>
        </Card.Subtitle>
        {
          cart.some(p=>p.id === prod.id)?
          (<Button variant="danger" 
          onClick={()=>{dispatch({
            type:"REMOVE_FROM_CART",
            payload:prod,
          })}}>Remove from cart</Button>):
          (
            <Button disabled={!prod.inStock}
              onClick={()=>{dispatch({
                type:"ADD_TO_CART",
                payload:prod,
              })}}> {!prod.inStock ? "out of stock": "Add to Cart"}</Button>
          )
        }
        
        
      </Card.Body>
    </Card>

  </div>
  )
}

export default SingleProducts